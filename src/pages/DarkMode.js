import React, {useEffect, useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default (props) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const darkmodeSet = () => {
    props.darkmodeSet(isDarkMode)
  }
  useEffect(()=>{
    darkmodeSet()
  },[isDarkMode])
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={70}
      className="toggle_btn"
    />
  );
};