import React, {useState} from 'react'
import './App.css'
import axios from 'axios'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Navigation from './components/Navigation/Navigation'
import PickFormTypePage from './components/PickFormTypePage/PickFormTypePage'
import VolunteerForm from './components/VolunteerForm/VolunteerForm'
import ImageUploadForm from './components/ImageUploadForm/ImageUploadForm'
import RefugeeForm from './components/RefugeeForm/RefugeeForm'

const App = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState('signin');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [personType, setPersonType] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')

  const savePerson = () => {
    axios.post('http://localhost:8080/', {
      email: email,
      password: password,
      personType: personType,
      lastName: lastName,
      firstName: firstName
    }).then((res) => {
      console.log(res)
    })
  }

  const displayPage = (page) => {
    if(page === 'signin')
      return <SignIn getPage={getPage} setCurrentPage={setCurrentPage} setEmail={setEmail} setPassword={setPassword}/>
    if(page === 'register')
      return <Register setCurrentPage={setCurrentPage} setEmail={setEmail} setPassword={setPassword}/>
    if(page === 'pickformtype')
      return <PickFormTypePage setCurrentPage={setCurrentPage} setPersonType={setPersonType}/>
    if(page === 'volunteerform')
      return <VolunteerForm setLastName={setLastName} setFirstName={setFirstName} savePerson={savePerson} setCurrentPage={setCurrentPage}/>
    if(page === 'imageuploadform')
      return <ImageUploadForm />
    if(page === 'refugeeform')
      return <RefugeeForm />
  }
  
  const getPage = () => {
    axios.get('http://localhost:8080/auth/google').then((res) => {
      setData(res.data)
    })
  }
  return (
    <div className='App'>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    { 
      displayPage(currentPage)
    }
    </div>
  )
}

export default App
