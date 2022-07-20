import React, { useState } from 'react';
import '../css/sideLinks.css';
import { Link } from 'react-router-dom';

export default function SideLinks() {
  const [burgerMenu, setburgerMenu] = useState(() => false);
  const burgerState = () => {
    if (burgerMenu == false) {
      setburgerMenu(true)
    } else {
      setburgerMenu(false)
    }
  }
  const windowHeights = (scrollHeight) => {
    window.scrollTo({ top: scrollHeight, behavior: 'smooth' })
  }
  return (
    <div className='sideLinks'>
      {/* <div
        onClick={burgerState}
        className='burger_menu'>
        {burgerMenu ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
      </div> */}
      <div className='a_setting_div'>
        <ul className='burger_ul'>
          <li><Link to='/'>INTRO</Link></li>
          <li><Link to='/1'>ABOUTME</Link></li>
          <li><Link to='/2'>PROFILE</Link></li>
          <li><Link to='/3'>SKILLS</Link></li>
          <li><Link to='/4'>ARCHIVING</Link></li>
          <li><Link to='/5'>PROJECTS</Link></li>
        </ul>
      </div>
    </div>
  )
}
