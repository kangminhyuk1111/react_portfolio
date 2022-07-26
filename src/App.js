import './App.css';
import './css/animation.css';
import Main from './pages/Main';
import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Archiving from './pages/Archiving';
import Projects from './pages/Projects';
import DarkMode from './pages/DarkMode';
import SideLinks from './pages/SideLinks';
import { useEffect, useState } from 'react';
import TopMain from './pages/TopMain';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import ContactMe from './pages/ContactMe';
import myprofile from './images/myprofile.jpg';

function App() {
  const [isdark, setIsDark] = useState(() => false)
  const [myLists, setMyLists] = useState([
    <TopMain mode={isdark} />
  ])
  const [pages, setPages] = useState(Number(1));
  const [getParams , setParams] = useState('');
  const darkmodeSet = (mode) => {
    setIsDark(mode);
  }
  useEffect(() => {
    console.log(isdark)
  }, [isdark])

  const appSearchfnc = (params) =>{
    setParams(params);
  }

  return (
    <div className={`App ${isdark}`}>
      <div className={`app_left`} id={`${getParams}`}>
      <div className='app_left_top'>
        <div className='app_left_top_img'>
          {/* <img src={myprofile}/> */}
        </div>
        <div className='app_left_top_links'>
          <h2 className='app_left_top_links_h2'>강 민 혁</h2>
          <h2 className='app_left_top_links_h2_2'>Kang Min Hyuk</h2>
          <h3>FRONTEND DEVELOPER</h3>
          <div className='app_left_top_links_footer'>
            <SideLinks appSearchParams={appSearchfnc}/>
          </div>
        </div>
      </div>
      </div>
      <div className='app_right'>
      <DarkMode darkmodeSet={darkmodeSet} />
        <Routes>
          <Route path={'/intro'} element={<TopMain mode={isdark} />} />
          <Route path={'/aboutme'} element={<Main mode={isdark} />} />
          <Route path={'/profile'} element={<Aboutme mode={isdark} />} />
          <Route path={'/skills'} element={<Skills mode={isdark} />} />
          <Route path={'/archiving'} element={<Archiving mode={isdark} />} />
          <Route path={'/projects'} element={<Projects mode={isdark} />} />
          <Route path={'/contactme'} element={<ContactMe mode={isdark} /> } />
        </Routes>
      </div>
      {/* <TopMain mode={isdark} />
      <Main mode={isdark} />
      <Aboutme mode={isdark} />
      <Skills mode={isdark} />
      <Archiving mode={isdark} />
      <Projects mode={isdark} />
      <ContactMe mode={isdark} /> */}
    </div>
  );
}

export default App;
