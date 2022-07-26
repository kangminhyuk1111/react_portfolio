import React, { useState } from 'react'
import '../css/contactme.css';
import kakaoIcon from '../images/kakao-talk.png';
import emailIcon from '../images/email.png';

export default function ContactMe(props) {
  const [classNames, setClassNames] = useState('good');
  return (
    <div className={`contact_me ${props.mode}`}>
      <h1 className={`aboutme_h1s ${props.mode} ${classNames}`}>CONTACT</h1>
      <div className={`contact_me_form_div ${props.mode}s ${classNames}`}>
        <div className='contact_me_ment'>

        </div>
        <div className='tell'>
          <div className='contact_icons'>
            <a href='https://open.kakao.com/o/sfYmY6re'><img src={kakaoIcon} /></a>
            <a href='mailto:rkdglqkr12@naver.com'><img src={emailIcon} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
