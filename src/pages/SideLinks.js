import React, { useState } from 'react';
import '../css/sideLinks.css';

export default function SideLinks() {
    const [burgerMenu , setburgerMenu] = useState();
  return (
        <div className='sideLinks'>
            <a onClick={"0"}><i class="fa-solid fa-bars"></i></a>
        </div>
  )
}
