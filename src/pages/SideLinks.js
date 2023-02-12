import React, { useEffect, useState } from 'react';
import '../css/sideLinks.css';
import { Link } from 'react-router-dom';

export default function SideLinks(props) {
  const [searchParams, setSearchParams] = useState(window.location.pathname[4]);
  const [burgerMenu, setburgerMenu] = useState(() => false);
  const [projectDisplay, setProjectDisplay] = useState('hideProject');
  const burgerHandler = () => { 
    if (projectDisplay === 'showProject') {
      setProjectDisplay('hideProject')
    } else {
      setProjectDisplay('showProject')
    }
  }
  const renderParams = async () => {
    await setSearchParams(window.location.pathname[4]);
    await props.appSearchParams(searchParams);
  }
  return (
    <div className={`sideLinks ${props.mode}`}>
      <div className={`a_setting_div ${props.mode}`}>
        <ul className={`burger_ul ${props.mode}`} onClick={() => renderParams()}>
          <li id='aboutmeClick'><Link className={`${props.mode}`} to='/aboutme'>ABOUTME</Link></li>
          <li id='projectClick' className={`burger_ul_projects_li ${props.mode}`} onClick={() => { burgerHandler() }}><Link className={`${props.mode}`} to='/projects'>PROJECTS</Link></li>
          <li id='skillsClick'><Link className={`${props.mode}`} to='/skills'>SKILLS</Link></li>
        </ul>
      </div>
    </div>
  )
}
