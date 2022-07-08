import React from 'react'
import '../css/aboutme.css';
import Carousel from './Carousel';
import { useEffect, useRef } from 'react';

export default function Aboutme(props) {
  window.addEventListener('scroll',()=>{
    if(window.scrollY >= 700){
      
    }
  });
  const useFadeIn = (duration) => {
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s`;
        current.style.opacity = 1;
      }
    }, [duration])
    return {
      ref: element,
      style: { opacity: 0 }
    }
  }
  const aboutmeFadeIn = useFadeIn(3)
  return (
    <div className={`aboutme ${props.mode}`}>
      <h1 className='aboutme_h1'>PROFILE</h1>
      <div className='aboutme_summary' {...aboutmeFadeIn}>
        <Carousel mode={props.mode}/>
      </div>
    </div>
  )
}