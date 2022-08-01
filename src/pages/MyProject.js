import React from 'react'

export default function MyProject(props) {
    return (
        <div className={`myprojects ${props.mode}s`}>
            <div className='myprojects_header'>
                <div className='header_top_titles'>
                    <p>{props.title}</p>
                    <p className='second_p'>소요기간 : {props.lesstime}</p>
                </div>
                <div className='header_second'>
                    <p className='header_second_logos'><a href={props.gitlink}>LINK TO GIT HUB</a></p>
                    <p className='header_second_logos'><a href={props.liveserver}>LIVE PAGES</a></p>
                    <p className='header_second_logos padding_top'>사용 기술 스택 : {props.usedskills}</p>
                </div>
            </div>
            <div className='myprojects_summary'>
            <div className='summary_right'>
                    <img src={props.projectImg} />
                </div>
                <div className='summary_left'>
                    <p className='summary_left_top'><h2>설명</h2>{props.summary}
                    </p>
                    <p className='summary_left_top'><h2>느낀점</h2>{props.feelings}
                    </p>
                </div>
                
            </div>
        </div>
    )
}
