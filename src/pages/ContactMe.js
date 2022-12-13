import React, { useState } from 'react'
import '../css/contactme.css';
import kakaoIcon from '../images/kakao-talk.png';
import emailIcon from '../images/email.png';

export default function ContactMe(props) {
  const [classNames, setClassNames] = useState('good');
  return (
    <div className={`contact_me ${props.mode}`} id='contactFocus'>
      {/* <h1 className={`aboutme_h1 ${props.mode} ${classNames}`}>CONTACT</h1>
      <div className={`contact_me_form_div ${props.mode}s right_${classNames}`}>
        <div className='inner_contactme'>
          <a className='kakaotalk_png'>
            <img src={kakaoIcon} />
          </a>
          <a className='email_png'>
            <img src={emailIcon} />
          </a>
        </div>
      </div> */}
      <p className='padding_set'>Copyright 2022. Kang MinHyuk All pictures cannot be copied without permission. </p>
    </div>
  )
}
