import React from 'react'
import Main_menu from '../molecules/main_menu'
import Logo from '../../assets/Erewna Logo.png';
import Btn from '../atoms/btn';
import './NAVBAR.css'

const navbar = () => {
  return (
    <div className='navbar'>
       <img src={Logo} alt='' className='logo_1' />
       <Main_menu/>
       <Btn className='navbar_btn'/>
    </div>
  )
}

export default navbar
