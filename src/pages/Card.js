import React from 'react'
import '../css/card.css';

export default function (props) {
  return (
    <div className='card'>
        <div className={`flex flex-col box-content h-5/6 w-11/12 rounded-lg mt-10 m-auto shadow-lg bg-white ${props.mode}s`}>
        <span className='py-4 p-6 text-sm pt-7'>{props.third}</span>
        <p className='text-lg' id='card_titles'>{props.title}</p>
        <p className='pt-2 text-base text-slate-900'>{props.second}</p>
      </div>
    </div>
  )
}
