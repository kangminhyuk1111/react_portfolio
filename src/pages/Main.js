import React from 'react'
import '../css/main.css';
import profile from '../images/profile.jpg';
import profile1 from '../images/profile1.jpg';

export default function Main() {
    return (
        <div className='main'>
            <div className='main_inner'>
                <div className='main_left'>
                    <div className='main_inner_top'>
                        <p className='top_p_1'>FRONTEND DEVELOPER</p>
                        <p className='top_p_2'>WEB PUBLISHER</p>
                        <p className='top_p_3'>WEB DESIGNER</p>
                    </div>
                    <div className='main_inner_summary'>
                        <p>안녕하세요.</p>
                        <p>프론트엔드 개발자를 목표로 나아가는 강민혁 입니다.</p>
                        <p>꾸준한 성장을 토대로 새로운 도전을 두려워하지 않고</p>
                        <p>배움을 멈추지 않습니다.</p>
                        <p>전역후 새로운 꿈을 향해 도전하고 있습니다.</p>
                        <p>도전심과 열정만은</p>
                        <p>그 누구에게도 뒤쳐지지 않는다고 생각합니다.</p>
                        <p>누구보다 노력하고 열심히 하겠습니다.</p>
                    </div>
                </div>
                <div className='main_right'>
                    <div className='right_left'>
                        <img src={profile1}/>
                    </div>
                    <div className='right_right'>
                        <img src={profile} />
                    </div>
                </div>
            </div>

        </div>
    )
}
