import React, { useState } from 'react';
import '../css/topmain.css';
import '../css/rightsmallmenu.css';
import SideLinks from './SideLinks';
import emoji from '../images/emoji.png';

export default function TopMain(props) {
  const [classNames, setClassNames] = useState('fadeInMode');
  return (
    <div className={`top_main ${props.mode}`}>
      <div className='top_main_left'>
        <div className='top_main_left_top'>
          <h1 className='left_name'>
            Kang Min Hyuk
          </h1>
          <h1 className='left_second'>
            Portfolio 2022
          </h1>
        </div>
        <div className='top_main_left_bottom'>
          <h1 className='bottom_job'>
            Frontend Developer
          </h1>
        </div>
      </div>
      <div className='top_main_right'>
        <div className='right_emoji'>
          <img src={emoji}/>
        </div>
        <div className='main_right_contact'>
          <div className='right_contact_social'>
            <p className='right_contact_social_tag'>Github</p>
            <p className='right_contact_social_sum'>https://github.com/kangminhyuk1111</p>
          </div>
          <div className='right_contact_social'>
            <p className='right_contact_social_tag'>Contact</p>
            <p className='right_contact_social_sum'>rktqkr1313@gmail.com</p>
          </div>
        </div>
      </div>
      {/* 메뉴바 */}
      <div className='right_small_menu'>
        <SideLinks />
      </div>
    </div>
  )
}
