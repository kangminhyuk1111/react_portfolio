import React, { useState } from 'react';
import '../css/sideLinks.css';

export default function SideLinks() {
  const [burgerMenu, setburgerMenu] = useState(() => false);
  const burgerState = () => {
    if (burgerMenu == false) {
      setburgerMenu(true)
    } else {
      setburgerMenu(false)
    }
  }
  return (
    <div className='sideLinks'>
      <div
        onClick={burgerState}
        className='burger_menu'>
        {burgerMenu ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
      </div>
        <ul className={burgerMenu ? 'burger_ul' : "burger_ul_hides"}>
          <li><a onClick={''}>PROFILE</a></li>
          <li><a onClick={''}>SKILLS</a></li>
          <li><a onClick={''}>ARCHIVING</a></li>
          <li><a onClick={''}>PROJECTS</a></li>
          <li><a onClick={''}>PROFILE</a></li>
        </ul>
    </div>
  )
}
