import './App.css';
import './css/animation.css';
import Main from './pages/Main';
import Archiving from './pages/Archiving';
import Projects from './pages/Projects';
import DarkMode from './pages/DarkMode';
import SideLinks from './pages/SideLinks';
import { useEffect, useState } from 'react';
import AboutmeSU from './pages/AboutmeSU';
import SkillsSu from './pages/SkillsSU';
import TopMain from './pages/TopMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactMe from './pages/ContactMe';
import SmallStacks from './pages/SmallStacks';

function App() {
  const [isdark, setIsDark] = useState(() => true)
  const [getParams, setParams] = useState('');
  const darkmodeSet = (mode) => {
    setIsDark(mode);
  }
  useEffect(() => {
    console.log(isdark)
  }, [isdark])

  const appSearchfnc = (params) => {
    setParams(params);
  }

  return (
    <div className={`App ${isdark}`}>
      <div className={`app_left ${isdark}`} id={`${getParams}`}>
        <div className={`app_left_top ${isdark}`}>
          <div className='app_left_top_img'>
          </div>
          <div className={`app_left_top_links ${isdark}`}>
            <h2 className='app_left_top_links_h2'>강 민 혁</h2>
            <h2 className='app_left_top_links_h2_2'>Kang Min Hyuk</h2>
            <h3>FRONTEND DEVELOPER</h3>
            <div className={`app_left_top_links_footer ${isdark}`}>
              <SideLinks appSearchParams={appSearchfnc} mode={isdark} />
              <DarkMode darkmodeSet={darkmodeSet} />
            </div>
          </div>
        </div>
      </div>
      <div className='app_right'>
          <TopMain mode={isdark} />
          <Main mode={isdark} />
          <Projects mode={isdark} />
          <SkillsSu mode={isdark} />
          <Archiving mode={isdark} />
          <ContactMe mode={isdark} />
          <SmallStacks />
      </div>
    </div>
  );
}

export default App;
