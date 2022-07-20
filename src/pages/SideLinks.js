import React, { useEffect, useState } from 'react';
import '../css/sideLinks.css';
import { Link } from 'react-router-dom';

export default function SideLinks(props) {
  const [searchParams , setSearchParams] = useState(window.location.pathname[4]);
  const [burgerMenu, setburgerMenu] = useState(() => false);
  const burgerState = () => {
    if (burgerMenu == false) {
      setburgerMenu(true)
    } else {
      setburgerMenu(false)
    }
  }
  const renderParams = async() =>{
    await setSearchParams(window.location.pathname[4]);
    await props.appSearchParams(searchParams);
  }
  return (
    <div className={`sideLinks`}>
      {/* <div
        onClick={burgerState}
        className='burger_menu'>
        {burgerMenu ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
      </div> */}
      <div className='a_setting_div'>
        <ul className='burger_ul' onClick={()=>renderParams()}>
          <li><Link to='/intro'>INTRO</Link></li>
          <li><Link to='/aboutme'>ABOUTME</Link></li>
          <li><Link to='/profile'>PROFILE</Link></li>
          <li><Link to='/skills'>SKILLS</Link></li>
          <li><Link to='/archiving'>ARCHIVING</Link></li>
          <li><Link to='/projects'>PROJECTS</Link></li>
          <li><Link to='/contactme'>CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
}
