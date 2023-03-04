import React from 'react'
import './PickFormTypePage.css'
import UkraineFlag from '../../assets/ukraine_flag.png';
import EarthImg from '../../assets/earth.png';
const PickFormTypePage = ({setCurrentPage, setPersonType}) => {
  return (
    <div className='PickFormTypePage'>
        <div className='images-form'>
            <img className='ukraine' alt='' src={UkraineFlag} onClick={() => {setCurrentPage('refugeeform'); setPersonType('refugee')}}/>
            <img className='earth' alt='' src={EarthImg} onClick={() => {setCurrentPage('volunteerform'); setPersonType('volunteer')}}/>
        </div>
    </div>
  )
}

export default PickFormTypePage
