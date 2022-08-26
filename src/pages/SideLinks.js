import React, { useEffect, useState } from 'react';
import '../css/sideLinks.css';
import { Link } from 'react-router-dom';

export default function SideLinks(props) {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  })
  const [searchParams, setSearchParams] = useState(window.location.pathname[4]);
  const [burgerMenu, setburgerMenu] = useState(() => false);
  const [projectDisplay, setProjectDisplay] = useState('hideProject');
  const burgerState = () => {
    if (burgerMenu == false) {
      setburgerMenu(true)
    } else {
      setburgerMenu(false)
    }
  }
  const burgerHandler = () => {
    if (projectDisplay === 'showProject') {
      setProjectDisplay('hideProject')
    } else {
      setProjectDisplay('showProject')
    }
  }
  const windowHrefHandler = (scrollHeight) => {
    window.scrollTo(0, scrollHeight);
  }
  const renderParams = async () => {
    await setSearchParams(window.location.pathname[4]);
    await props.appSearchParams(searchParams);
  }
  return (
    <div className={`sideLinks ${props.mode}`}>
      <div className={`a_setting_div ${props.mode}`}>
        <ul className={`burger_ul ${props.mode}`} onClick={() => renderParams()}>
          <li><Link className={`${props.mode}`} to='/aboutme'>ABOUTME</Link></li>
          <li className={`burger_ul_projects_li ${props.mode}`} onClick={() => { burgerHandler() }}><Link className={`${props.mode}`} to='/projects'>PROJECTS</Link></li>
          <ul className={`burger_projects ${projectDisplay} ${props.mode}`}>
            <li className={`burger_projects_li`}><a className={`${props.mode}atg`} onClick={() => { windowHrefHandler(979) }}>현대모비스 오토벨</a></li>
            <li className={`burger_projects_li`}><a className={`${props.mode}atg`} onClick={() => { windowHrefHandler(2441) }}>책 검색 API</a></li>
            <li className={`burger_projects_li`}><a className={`${props.mode}atg`} onClick={() => { windowHrefHandler(3300) }}>게시판(REACT)</a></li>
            <li className={`burger_projects_li`}><a className={`${props.mode}atg`} onClick={() => { windowHrefHandler(4200) }}>포트폴리오(REACT)</a></li>
            <li className={`burger_projects_li`}><a className={`${props.mode}atg`} onClick={() => { windowHrefHandler(5100) }}>영화 API</a></li>
            <li className={`burger_projects_li`}><a className={`${props.mode}atg`} onClick={() => { windowHrefHandler(5950) }}>포트폴리오(NONE-REACT)</a></li>
          </ul>
          <li><Link className={`${props.mode}`} to='/skills'>SKILLS</Link></li>
          <li><Link className={`${props.mode}`} to='/archiving'>ARCHIVING</Link></li>
          <li><Link className={`${props.mode}`} to='/contactme'>CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
}
