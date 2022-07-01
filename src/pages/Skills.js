import React from 'react'
import '../css/skills.css'
import Pgbar from './Pgbar'

export default function Skills() {

    return (
        <div className='skills'>
            <h1 className='skills_h1'>Skills</h1>
            <div className='flex flex-col box-content h-4/6 w-3/4 rounded-lg mt-10 pb-20 m-auto shadow-lg shadow-gray-300 bg-white'>
                <Pgbar skillicons={<img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />}
                    skillname='HTML'
                    value={90} />
                <Pgbar skillicons={<img src="https://img.icons8.com/color/48/000000/css3.png" />}
                    skillname='CSS'
                    value={80} />
                <Pgbar skillicons={<img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />}
                    skillname='JS'
                    value={90} />
                <Pgbar skillicons={<img src="https://img.icons8.com/ios/50/000000/jquery.png" />}
                    skillname='JQuery'
                    value={70} />

                <Pgbar skillicons={<img src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png" />}
                    skillname='ReactJS'
                    value={80} />
                <Pgbar skillicons={<img src="https://img.icons8.com/color/48/000000/nodejs.png" />}
                    skillname='NodeJS'
                    value={50} />
                <Pgbar skillicons={<img src="https://img.icons8.com/fluency/48/000000/mysql-logo.png" />}
                    skillname='MySQL'
                    value={50} />
                <Pgbar skillicons={<img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" />}
                    skillname='JAVA'
                    value={60} />

            </div>
        </div>
    )
}
