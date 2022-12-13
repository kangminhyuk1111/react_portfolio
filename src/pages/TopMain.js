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
          <p className='left_name'>
            <div className='animate__fadeInUp'>K</div>
            <div className='animate__fadeInUp'>a</div>
            <div className='animate__fadeInUp'>n</div>
            <div className='animate__fadeInUp pr-8'>g</div>
            <div className='animate__fadeInUp'>M</div>
            <div className='animate__fadeInUp'>i</div>
            <div className='animate__fadeInUp pr-8'>n</div>
            <div className='animate__fadeInUp'>H</div>
            <div className='animate__fadeInUp'>y</div>
            <div className='animate__fadeInUp'>u</div>
            <div className='animate__fadeInUp'>k</div>
          </p>
          <p className='left_second'>
            <div className='animate__fadeInUp'>P</div>
            <div className='animate__fadeInUp'>o</div>
            <div className='animate__fadeInUp'>r</div>
            <div className='animate__fadeInUp'>t</div>
            <div className='animate__fadeInUp'>f</div>
            <div className='animate__fadeInUp'>o</div>
            <div className='animate__fadeInUp'>l</div>
            <div className='animate__fadeInUp'>i</div>
            <div className='animate__fadeInUp'>o</div>
            <div className='animate__fadeInUp'>2</div>
            <div className='animate__fadeInUp'>0</div>
            <div className='animate__fadeInUp'>2</div>
            <div className='animate__fadeInUp'>2</div>
          </p>
        </div>
        <div className='top_main_left_bottom'>
          <h1 className='bottom_job'>
            Frontend Developer
          </h1>
        </div>
      </div>
      <div className='top_main_right'>
        <div className='right_emoji'>
          <img src={emoji} />
        </div>
        {/* <div className='main_right_contact'>
          <div className='right_contact_social'>
            <p className='right_contact_social_tag'>Github</p>
            <p className='right_contact_social_sum'>https://github.com/kangminhyuk1111</p>
          </div>
          <div className='right_contact_social'>
            <p className='right_contact_social_tag'>Contact</p>
            <p className='right_contact_social_sum'>rktqkr1313@gmail.com</p>
          </div>
        </div> */}
      </div>
      {/* 메뉴바 */}
      <div className='right_small_menu'>
        <SideLinks />
      </div>
    </div>
  )
}
