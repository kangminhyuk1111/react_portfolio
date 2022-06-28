import React from 'react'
import '../css/archiving.css';

export default function Archiving() {
    return (
        <div className='archiving'>
            <h1 className='skills_h1'>ARCHIVING</h1>
            <div className='archiving_main'>
                <div className='archiving_left'>
                    <div className='archiving_top'>
                        <img src="https://img.icons8.com/plasticine/100/000000/github-squared.png" />
                        <span className='archiving_logos'>GIT HUB</span>
                    </div>
                    <div className='archving_footer'>
                        <ul className='archiving_ul'>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;과거 프로젝트, 프로그램, 앱의 소스 코드</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;혼자 혹은 같이 공부하기 위해 만든 소스 코드</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;일일 공부를 기록하기 위해 커밋</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;일일 공부를 기록하기 위해 커밋</li>
                        </ul>
                    </div>
                </div>
                <div className='archiving_right'>
                    <div className='archiving_top'>
                        <img src="https://img.icons8.com/bubbles/100/000000/naver-blog.png" />
                        <span className='archiving_logos'>NaverBlog</span>
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
