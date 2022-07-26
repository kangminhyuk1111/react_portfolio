import React, { useState } from 'react';
import '../css/topmain.css';

export default function TopMain(props) {
  const [classNames , setClassNames] = useState('fadeInMode');
  return (
    <div className={`top_main ${props.mode}`}>
        <p className={`top_main_header ${classNames}`}>P O R T F O L I O</p>
        <p className={`header_first ${classNames}`}>FRONTEND DEVELOPER</p>
        <p className={`header_footer ${classNames}`}>KANG MIN HYUK</p>
    </div>
  )
}
