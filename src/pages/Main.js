import React, { useState, useEffect } from 'react'
import '../css/main.css';
import profile from '../images/profile.jpg';

export default function Main(props) {
    const [classNames, setClassNames] = useState('good');
    return (
        <div className={`top_main`}>
            <div className={`main ${props.mode}`}>
                <div className={`main_inner ${props.mode}`}>
                    <div className={`main_left ${props.mode}`}>
                        <div className='main_inner_summary'>
                            <div className={`main_inner_top ${props.mode} showTextSlow`}>
                                <p className='inner_top_icon showTextSlow'>👨‍💻</p>
                                <p className='top_p_2 showTextSlow'>빠르게 바뀌는 트렌드 속 사용자들의 더 나은 경험을 위해 노력하는</p>
                                <p className='top_p_2 showTextSlow'><span className='top_p_1'>FRONTEND DEVELOPER 강민혁</span>입니다.</p>
                            </div>
                            <p className='inner_p showText_3s'>컴퓨터 언어를 사용해 구현하고자 하는 프로그램이 시각화되는 매력에 빠져 개발자가 되고 싶습니다. </p>
                            <p className='inner_p showText_4s'>
                                사용자의 입장에서 느끼는 좋은 서비스가 무엇인지 다양한 관점에서 고민하고, 다양한 개발자분들과 함께 정보를 공유하며 제가 가진 능력을 적극적으로 성장시켰습니다.</p>
                            <p className='inner_p_1 showText_4s'>진취적이며 능동적으로 업무에 임하는 개발자가되겠습니다.</p>
                            <p className='myinfo_links showText_5s'>📧<a href='#'>rkdglqkr12@naver.com</a></p>
                            <p className='myinfo_links showText_5s'>🐱<a href='#'>Blog</a></p>
                            <p className='myinfo_links showText_5s'>🐔<a href='#'>Github</a></p>
                        </div>
                    </div>
                    <div className='main_right showTextTop'>
                        <div className='right_right'>
                            <img src={profile} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
