import React , { useState } from 'react'
import '../css/archiving.css';

export default function Archiving(props) {
    const [classNames, setClassNames] = useState('good');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 2500) {
            setClassNames('right_good');
        } else {
        }
    });
    return (
        <div className={`archiving ${props.mode}linear`} >
            <h1 className={`archiving_h1 ${classNames}`}>ARCHIVING</h1>
            <div className={`archiving_main ${classNames}`}>
                <div className={`archiving_left ${props.mode}s ${classNames}`}>
                    <div className='archiving_top'>
                        <i className="fa-brands fa-github"></i>
                        <span className='archiving_logos'><a href='https://github.com/kangminhyuk1111'>GITHUB</a></span>
                    </div>
                    <div className='archving_footer'>
                        <ul className='archiving_ul'>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;<p className='cs'>과거 프로젝트, 프로그램, 앱의 소스 코드</p></li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;<p className='cs'>혼자 혹은 같이 공부하기 위해 만든 소스코드</p></li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;<p className='cs'>코드를 공유하고 피드백 받기위한 저장소</p></li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;<p className='cs'>일일 공부를 기록하기 위해 커밋</p></li>
                        </ul>
                    </div>
                </div>
                <div className={`archiving_right ${props.mode}s ${classNames}`}>
                    <div className='archiving_top'>
                        <i className="fa-brands fa-blogger-b" id='naverblog'></i>
                        <span className='archiving_logos archiving_naver'><a href='https://blog.naver.com/rkdglqkr12'>NAVER BLOG</a></span>
                    </div>
                    <div className='archving_footer'>
                        <ul className='archiving_ul'>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;<p className='cs'>공부 하면서 어려웠던 점 힘들었던 점 기록</p></li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;<p className='cs'>지식 공유를 통한 선한 영향력 행사</p></li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;<p className='cs'>프로젝트의 장단점을 파악하기위해 공유,기록</p></li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;<p className='cs'>하루의 목표 설정 목표 성취 유무 기록</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
