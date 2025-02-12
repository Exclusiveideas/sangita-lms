"use client";

import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('home')
  return (
    <div className='navbarWrapper'>
        <div className="navTextContainer">
            <p className={`navTxt ${activeNav == 'home' && 'active'}`}>Home <hr /></p>
            <p className={`navTxt ${activeNav == 'services' && 'active'}`}>Services <hr /></p>
            <p className={`navTxt ${activeNav == 'courses' && 'active'}`}>Courses <hr /></p>
            <p className={`navTxt ${activeNav == 'booking' && 'active'}`}>Booking Tab <hr /></p>
            <p className={`navTxt ${activeNav == 'events' && 'active'}`}>Events <hr /></p>
        </div>
        <div className="navCtaWrapper">
            <button className="navCTA">Book A Session</button>
        </div>
    </div> 
  )
}

export default Navbar