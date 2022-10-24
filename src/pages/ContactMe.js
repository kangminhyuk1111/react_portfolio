import React, { useState } from 'react'
import '../css/contactme.css';
import kakaoIcon from '../images/kakao-talk.png';
import emailIcon from '../images/email.png';

export default function ContactMe(props) {
  const [classNames, setClassNames] = useState('good');
  return (
    <div className={`contact_me ${props.mode}`} id='contactFocus'>
      <h1 className={`aboutme_h1 ${props.mode} ${classNames}`}>CONTACT</h1>
      <div className={`contact_me_form_div ${props.mode}s right_${classNames}`}>
        <div className='inner_contactme'>
          
        </div>
      </div>
    </div>
  )
}
