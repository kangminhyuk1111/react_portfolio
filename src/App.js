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
import ContactMe from './pages/ContactMe';

function App() {
  const [isdark,setIsDark] = useState(()=>false)
  const darkmodeSet = (mode) =>{
    setIsDark(mode);
  }
  useEffect(()=>{
    console.log(isdark)
  },[isdark])
return (
  <div className={`App ${isdark}`}>
    <DarkMode darkmodeSet={darkmodeSet}/>
    <SideLinks/>
    <TopMain/>
    <Main mode={isdark}/>
    <Aboutme mode={isdark}/>
    <Skills mode={isdark}/>
    <Archiving mode={isdark}/>
    <Projects mode={isdark}/>
    <ContactMe/>
  </div>
);
}

export default App;
