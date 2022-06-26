import React from 'react'
import '../css/aboutme.css';
import Carousel from './Carousel';

export default function Aboutme() {
  return (
    <div className='aboutme'>
        <h1 className='aboutme_h1'>ABOUT ME</h1>
        <div className='aboutme_summary'>
            <Carousel/>
        </div>
    </div>
  )
}