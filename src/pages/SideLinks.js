import React, { useEffect, useState } from 'react';
import '../css/sideLinks.css';
import { Link } from 'react-router-dom';

export default function SideLinks(props) {
  const [searchParams , setSearchParams] = useState(window.location.pathname[4]);
  const [burgerMenu, setburgerMenu] = useState(() => false);
  const [projectDisplay , setProjectDisplay] = useState('hideProject');
  const burgerState = () => {
    if (burgerMenu == false) {
      setburgerMenu(true)
    } else {
      setburgerMenu(false)
    }
  }
  const burgerHandler = () =>{
    if(projectDisplay === 'showProject'){
      setProjectDisplay('hideProject')
    }else{
      setProjectDisplay('showProject')
    }
  }
  const renderParams = async() =>{
    await setSearchParams(window.location.pathname[4]);
    await props.appSearchParams(searchParams);
  }
  return (
    <div className={`sideLinks`}>
      <div className='a_setting_div'>
        <ul className='burger_ul' onClick={()=>renderParams()}>
          <li><Link to='/intro'>INTRO</Link></li>
          <li><Link to='/aboutme'>ABOUTME</Link></li>
          <li><Link to='/profile'>PROFILE</Link></li>
          <li><Link to='/skills'>SKILLS</Link></li>
          <li><Link to='/archiving'>ARCHIVING</Link></li>
          <li className={`burger_ul_projects_li`} onClick={()=>{burgerHandler()}}><Link to='/projects'>PROJECTS</Link>
            <ul className={`burger_projects ${projectDisplay}`}>
              <li className='burger_projects_li'>TO DO LIST</li>
              <li className='burger_projects_li'>현대모비스 오토벨</li>
              <li className='burger_projects_li'>책 검색 API</li>
              <li className='burger_projects_li'>포트폴리오(REACT)</li>
              <li className='burger_projects_li'>영화 API</li>
              <li className='burger_projects_li'>포트폴리오(NONE-REACT)</li>
            </ul>
          </li>
          <li><Link to='/contactme'>CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
}
