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
    <Main mode={isdark}/>
    <Aboutme mode={isdark}/>
    <Skills mode={isdark}/>
    <Archiving mode={isdark}/>
    <Projects mode={isdark}/>
  </div>
);
}

export default App;
