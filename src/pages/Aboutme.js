import React, { useState } from 'react'
import '../css/aboutme.css';
import Carousel from './Carousel';
import { useEffect, useRef } from 'react';

export default function Aboutme(props) {
  const [classNames,setClassNames] = useState('right_good');
  return (
    <div className={`aboutme ${props.mode}linear`}>
      <h1 className={`aboutme_h1s ${classNames}`}>PROFILE</h1>
      <div className={`aboutme_summary ${classNames}`}>
        <Carousel mode={props.mode}/>
      </div>
    </div>
  )
}