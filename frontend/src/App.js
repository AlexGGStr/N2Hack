import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Navigation from "./components/Navigation/Navigation";
import PickFormTypePage from "./components/PickFormTypePage/PickFormTypePage";
import VolunteerForm from "./components/VolunteerForm/VolunteerForm";
import ImageUploadForm from "./components/ImageUploadForm/ImageUploadForm";
import RefugeeForm from "./components/RefugeeForm/RefugeeForm";
import { useContext } from "react";
import UserContext from "./store/id_context";
import HomesList from "./components/HomesList/HomesList";
import ImagesListPage from "./components/ImagesListPage/ImagesListPage";

const App = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState("signin");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [personType, setPersonType] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [savedId, setSavedId] = useState("");
  const [savedKind, setSavedKind] = useState("");
  const [imagesListLength, setImagesListLength] = useState(0);
  const [imagesArray, setImagesArray] = useState([]);

  const savePerson = () => {
    console.log(email, password, personType, username);
    axios
      .post("http://localhost:8080/user/register", {
        email: email,
        password: password,
        personType: personType,
        username: username,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const UserCtx = useContext(UserContext);
  const getProperties = () => {
    console.log("savedId", savedId);
    axios
      .get(`http://localhost:8080/household/myHouseholds/1`)
      .then((res) => {
        setPropertiesArray(res.data);
        console.log(res.data);
      });
  };
  const checkLogin = () => {
    axios
      .get(
        `http://localhost:8080/user/check?username=${username}&password=${password}`
      )
      .then((res) => {
        if (res.status === 200) {
          console.log("RASPUNSURI", res.data.id, res.data.kind);
          setSavedId(res.data.id);
          setSavedKind(res.data.kind);
          console.log("VERIFICARE savedId: ", savedId);
        } else console.log("Error");
      });
    console.log("VERIFICARE 2: ", savedId);
  };

  const displayPage = (page) => {
    if (page === "signin")
      return (
        <SignIn
          getPage={getPage}
          setCurrentPage={setCurrentPage}
          setUsername={setUsername}
          setPassword={setPassword}
          checkLogin={checkLogin}
          getProperties={getProperties}
        />
      );
    if (page === "register")
      return (
        <Register
          setCurrentPage={setCurrentPage}
          setEmail={setEmail}
          setPassword={setPassword}
          setUsername={setUsername}
        />
      );
    if (page === "pickformtype")
      return (
        <PickFormTypePage
          setCurrentPage={setCurrentPage}
          setPersonType={setPersonType}
        />
      );
    if (page === "volunteerform")
      return (
        <VolunteerForm
          setLastName={setLastName}
          setFirstName={setFirstName}
          savePerson={savePerson}
          setCurrentPage={setCurrentPage}
          setUsername={setUsername}
        />
      );
    if (page === "imageuploadform")
      return (
        <ImageUploadForm
          setImagesListLength={setImagesListLength}
          setImagesArray={setImagesArray}
          imagesArray={imagesArray}
        />
      );
    if (page === "refugeeform")
      return (
        <RefugeeForm setLastName={setLastName} setFirstName={setFirstName} />
      );
    // if(page === "homeslist")
    //   return <HomesList propertiesArray={propertiesArray}/>
    if (page === "imageslistpage")
      return <ImagesListPage imagesArray={imagesArray} />;
  };

  const getPage = () => {
    axios.get("http://localhost:8080/auth/google").then((res) => {
      setData(res.data);
    });
  };
  return (
    <div className="App">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        imagesListLength={imagesListLength}
      />
      {displayPage(currentPage)}
    </div>
  );
};

export default App;
