import speech_recognition as sr
import sys

# Create a recognizer object
r = sr.Recognizer()

# Use the default microphone as the audio source
with sr.Microphone() as source:

    # Adjust for ambient noise
    r.adjust_for_ambient_noise(source)

    print("Listening...")

    # Record audio for 5 seconds
    audio = r.record(source, duration=5)

    print("Recognizing...")

    # Use Google Speech Recognition to transcribe the audio
    try:
        text = r.recognize_google(audio)
        print(f"You said: {text}")
    except sr.UnknownValueError:
        print("Could not understand audio")
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")


    args_list = []

    for arg in sys.argv[1:]:
        if arg in text:
            with open("output.txt", "w") as f:
                f.write(arg)





