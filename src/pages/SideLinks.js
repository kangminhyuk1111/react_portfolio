import React, { useState } from 'react';
import '../css/sideLinks.css';

export default function SideLinks() {
    const [burgerMenu , setburgerMenu] = useState(()=>false);
    const burgerState = () =>{
      if(burgerMenu == false){
        setburgerMenu(true)
      }else{
        setburgerMenu(false)
      }
    }
  return (
        <div className='sideLinks'>
            <a
              onClick={burgerState}
              className={burgerMenu ? "burger_menu" : "burger_menu_hide"}><i className="fa-solid fa-bars"></i></a>
            <div className='burgerLinks'>
              <ul className='burger_ul'>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
        </div>
  )
}
