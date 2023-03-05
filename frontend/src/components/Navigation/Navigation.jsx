import React from 'react'
import UkraineFlagIcon from '../../assets/flag-of-ukraine.png'
import './Navigation.css'

const Navigation = ({currentPage, setCurrentPage}) => {
  const displayNavigationButton = (page) => {
    if(page === 'signin')
      return <p onClick={() => setCurrentPage('register')} className='f3 b link dim black pa3 pointer scale-transformation'>Register</p>
    if(page === 'register')
      return <p onClick={() => setCurrentPage('signin')} className='f3 b link dim black pa3 pointer scale-transformation'>Sign In</p>
    if(page === 'imageuploadform')
      return <p onClick={() => setCurrentPage('imagelistpage')} className='f3 b link dim black pa3 pointer scale-transformation'>Photos List (0)</p>
  }
  return (
    <div className='navigation-buttons'>
      <img alt='' src={UkraineFlagIcon} className={`ukraine-icon ${currentPage === 'signin' || currentPage === 'register' || currentPage === 'imageuploadform' ? '' : 'display-none'}`}/>
      {displayNavigationButton(currentPage)}
    </div>
  )
}

export default Navigation