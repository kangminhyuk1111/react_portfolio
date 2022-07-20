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
  const darkmodeSet = (mode) => {
    setIsDark(mode);
  }
  useEffect(() => {
    console.log(isdark)
  }, [isdark])
  // const lists = [
  //   <TopMain mode={isdark} />,
  //   <Main mode={isdark} />,
  //   <Aboutme mode={isdark} />,
  //   <Skills mode={isdark} />,
  //   <Archiving mode={isdark} />,
  //   <Projects mode={isdark} />,
  //   <ContactMe mode={isdark} />,
  // ]
  // useEffect(() => {
  //   event();
  // },[pages])
  // const event = () => {
  //   window.addEventListener("wheel", (e) => {
  //     setPages(()=>pages+1);
  //     window.history.pushState(null,null,`${pages}`);
  //     console.log(window.location.pathname);
  //   }, { passive: false })
  // }
  // useEffect(() => {
  //   wheelEvent()
  // }, [pages])
  // const wheelEvent = () => {
  //   window.addEventListener("wheel", (e) => {
  //     console.log("wheel!")
  //     console.log(e);
  //     e.preventDefault();
  //     if (pages == 6) {
  //       e.stopPropagation();
  //     } else {
  //       e.preventDefault();
  //       if (e.deltaY > 0) {
  //         setPages(()=>pages + 1);
  //         setMyLists(() => lists[pages]);
  //         console.log(pages);
  //       } else if (e.deltaY < 0) {
  //         if (pages <= 0) {
  //           setPages(0);
  //           setMyLists(() => lists[pages]);
  //         } else {
  //           setMyLists(() => lists[pages]);
  //           setPages(() => pages - 1);
  //         }
  //         console.log(pages);
  //       }
  //     }
  //   }, { passive: false });
  // }
  const [posfixed,SetPosFixed]=useState('');


  return (
    <div className={`App ${isdark}`}>
      <div className='app_left'>
      <div className='app_left_top'>
        <div className='app_left_top_img'>
          <img src={myprofile}/>
        </div>
        <div className='app_left_top_links'>
          <h2>강민혁</h2>
          <h3>FRONTEND DEVELOPER</h3>
          <div className='app_left_top_links_footer'>
            <SideLinks/>
          </div>
        </div>
      </div>
      <DarkMode darkmodeSet={darkmodeSet} />
      </div>
      <div className='app_right'>
        <Routes>
          <Route path={'/'} element={<TopMain mode={isdark} />} />
          <Route path={'/1'} element={<Main mode={isdark} />} />
          <Route path={'/2'} element={<Aboutme mode={isdark} />} />
          <Route path={'/3'} element={<Skills mode={isdark} />} />
          <Route path={'/4'} element={<Archiving mode={isdark} />} />
          <Route path={'/5'} element={<Projects mode={isdark} />} />
          <Route path={'/6'} element={<ContactMe mode={isdark} /> } />
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
