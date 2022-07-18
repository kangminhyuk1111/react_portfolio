import React , { useState } from 'react'
import '../css/archiving.css';

export default function Archiving(props) {
    const [classNames, setClassNames] = useState('none');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 2800) {
            setClassNames('right_good');
        } else {
            setClassNames('none');
        }
    });
    return (
        <div className={`archiving ${props.mode}linear`}>
            <h1 className={`archiving_h1 ${classNames}`}>ARCHIVING</h1>
            <div className={`archiving_main ${classNames}`}>
                <div className={`archiving_left ${props.mode}s ${classNames}`}>
                    <div className='archiving_top'>
                        <i className="fa-brands fa-github"></i>
                        <span className='archiving_logos'><a href='https://github.com/kangminhyuk1111'>GITHUB</a></span>
                    </div>
                    <div className='archving_footer'>
                        <ul className='archiving_ul'>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;과거 프로젝트, 프로그램, 앱의 소스 코드</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;혼자 혹은 같이 공부하기 위해 만든 소스코드</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;일일 공부를 기록하기 위해 커밋</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;일일 공부를 기록하기 위해 커밋</li>
                        </ul>
                    </div>
                </div>
                <div className={`archiving_right ${props.mode}s ${classNames}`}>
                    <div className='archiving_top'>
                        <i className="fa-brands fa-blogger-b" id='naverblog'></i>
                        <span className='archiving_logos'><a href='https://blog.naver.com/rkdglqkr12'>NAVER BLOG</a></span>
                    </div>
                    <div className='archving_footer'>
                        <ul className='archiving_ul'>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;공부 하면서 어려웠던 점 힘들었던 점 기록</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;지식 공유를 통한 선한 영향력 행사</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;하루의 목표 설정 목표 성취 유무 기록</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;하루의 목표 설정 목표 성취 유무 기록</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
