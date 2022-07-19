import React from 'react';
import '../css/topmain.css';

export default function TopMain(props) {
  return (
    <div className={`top_main ${props.mode}`}>
        <p className='top_main_header'>P O R T F O L I O</p>
        <p className='header_first'>FRONTEND DEVELOPER</p>
        <p className='header_footer'>KANG MIN HYUK</p>
    </div>
  )
}
