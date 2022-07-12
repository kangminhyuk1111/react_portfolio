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
  const windowHeights = (scrollHeight) => {
    window.scroll(0, scrollHeight)
  }
  return (
    <div className='sideLinks'>
      <div
        onClick={burgerState}
        className='burger_menu'>
        {burgerMenu ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
      </div>
      <div className='a_setting_div'>
        <ul className={burgerMenu ? 'burger_ul' : "burger_ul_hides"}>
          <li><a onClick={() => windowHeights(0)}>TOP</a></li>
          <li><a onClick={() => windowHeights(700)}>PROFILE</a></li>
          <li><a onClick={() => windowHeights(1020)}>SKILLS</a></li>
          <li><a onClick={() => windowHeights(1635)}>ARCHIVING</a></li>
          <li><a onClick={() => windowHeights(2180)}>PROJECTS</a></li>
        </ul>
      </div>
    </div>
  )
}
