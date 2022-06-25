import React from 'react'

export default function Pgbar(props) {
    return (
        <div className='pgbar'>
            <span className='inner_pgbar'>
                {props.skillicons}
                <span className='skill_name'>{props.skillname}</span>
                <progress id="progress" value={props.value} min="0" max="100"><p>text</p></progress>
            </span>
        </div>
    );
}
