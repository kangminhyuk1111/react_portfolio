import React from 'react'
import '../css/projects.css';
import MyProject from './MyProject';

export default function Projects() {
  return (
    <div className='projects'>
        <h1 className='skills_h1'>Projects</h1>
        <div className='projects_main'>
          <MyProject/>
          <MyProject/>
        </div>
    </div>
  )
}
