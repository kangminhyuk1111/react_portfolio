import React from 'react'

export default function MyProject(props) {
  return (
    <div className={`myprojects ${props.mode}s`}>
        <div className='myprojects_header'>
            <p>{props.title}</p>
            <div className='header_second'>
            <p>소요기간 : {props.lesstime}</p>
            <p><a href={props.gitlink}>LINK TO GIT HUB</a></p>
            <p><a href={props.liveserver}>LIVE PAGES</a></p>
            </div>
        </div>
        <div className='myprojects_summary'>
            <div className='summary_left'>
                <p className='summary_left_top'><h2>설명</h2>{props.summary}
                </p>
                <p className='summary_left_top'><h2>느낀점</h2>{props.feelings}
                </p>
            </div>
            <div className='summary_right'>
                <img src={props.projectImg}/>
            </div>    
        </div>      
    </div>
  )
}
