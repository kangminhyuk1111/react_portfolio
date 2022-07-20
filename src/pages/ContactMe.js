import React from 'react'
import '../css/contactme.css';
import kakaoIcon from '../images/kakao-talk.png';

export default function ContactMe() {
  return (
    <div className='contact_me'>
      <h1 className='aboutme_h1'>CONTACT</h1>
      <div className='contact_me_form_div'>
        <div className='tell'>
          <div className='contact_icons'>
            <img src={kakaoIcon}/>
          </div>
          <div className='contact_tell'>
            
          </div>
        </div>
        <div className='tell'>
          
        </div>  
      </div>

    </div>
  )
}
