import React, { useState , useEffect } from 'react';
import '../css/aboutmesu.css';
import '../css/aboutme.css';
import '../css/skillssu.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutmeSU(props) {
    const [classNames ,setClassNames] = useState('good');
    useEffect(()=>{
        AOS.init();
      })
    return (
        <div className={`aboutmy ${props.mode}linear`} id='skillFocus'>
            <h1 className={`aboutme_h1`}>SKILLS</h1>
            <div className={`about_my showText_3s`}> 
            {/*  data-aos="fade-right" data-aos-duration="1000" */}
                <div className='my_name_sk' data-aos="fade-right">
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/html-5--v1.png" /><p className='inner_pt'>HTML</p></p>
                    <p className='my_skills_sum'>웹 표준과 웹 접근성을 고려한 <span>표준 마크업</span>을 능숙하게 다룰 수 있습니다.</p>
                    <p className='my_skills_sum'>사용자의 입장에서 더욱 보기편하고 좋은 UI를 구성하려 노력합니다.</p>
                </div>
                <div className='my_name_sk' data-aos="fade-right" data-aos-duration="1000">
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/css3.png" /><p className='inner_pt'>CSS</p></p>
                    <p className='my_skills_sum'>CSS 모듈(CSS-IN-CSS)방식으로 스타일링 할 수있습니다.</p>
                    <p className='my_skills_sum'><span>Media Query</span>를 이용한 반응형 웹 페이지를 제작 가능합니다.</p>
                    <p className='my_skills_sum'>React에서의 <span>Styled-Component</span>를 사용 할 수 있습니다.</p>
                    <p className='my_skills_sum'>CSS 전처리기인 <span>Sass</span>를 사용 해본 경험이 있습니다.</p>
                </div>
                <div className='my_name_sk' data-aos="fade-right" data-aos-duration="1000">
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/javascript--v1.png" /><p className='inner_pt'>JavaScript</p></p>
                    <p className='my_skills_sum'>ES2015+ 이상의 <span>Modern JavaScript</span> 문법에 익숙합니다.</p>
                    <p className='my_skills_sum'>JavaScript 라이브러리인 <span>JQuery</span> 사용 해본 경험이 있습니다.</p>
                </div>
                <div className='my_name_sk' data-aos="fade-right" data-aos-duration="1000">
                <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/nodejs.png" /><p className='inner_pt'>NodeJS</p></p>
                    <p className='my_skills_sum'><span>Express</span>를 이용한 서버 구축을 할 수 있습니다.</p>
                    <p className='my_skills_sum'><span>REST API로직</span>에 따라 <span>Database(MySQL)</span>에 접근하여 작업을 처리 할 수 있습니다.</p>
                </div>
                <div className='my_name_sk' data-aos="fade-right" data-aos-duration="1000">
                <p className='my_skills_sum_header'><img src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png" /><p className='inner_pt'>React</p></p>
                    <p className='my_skills_sum'>효율적인 개발을 위한 React 사용에 익숙합니다.</p>
                    <p className='my_skills_sum'><span>Class Component</span>와 <span>Function Component</span> 두 종류를 모두 사용 할 수 있습니다.</p>
                    <p className='my_skills_sum'><span>React Custom Hooks</span>를 제작 또는 사용 할 수 있습니다.</p>
                    <p className='my_skills_sum'>상태관리를 위해 <span>Redux ,Context API</span>를 사용 해본 경험이 있습니다.</p>
                </div>
                <div className='my_name_sk' data-aos="fade-right" data-aos-duration="1000">
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/fluency/48/000000/mysql-logo.png" /><p className='inner_pt'>MySQL</p></p>
                    <p className='my_skills_sum'>데이터베이스의 기본적인 개념을 알고 이해 할 수있습니다.</p>
                    <p className='my_skills_sum'><span>SQL문</span>을 활용한 테이블 생성과 검색, 수정 삭제 처리 기능을 처리할 수 있습니다.</p>
                </div>
                <div className='my_name_sk' data-aos="fade-right" data-aos-duration="1000">
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/folder-invoices--v1.png"/><p className='inner_pt'>Libraries</p></p>
                    <p className='my_skills_sum'><span>BootStrap5, Tailwind CSS, Material UI, JQuery</span>의 라이브러리를 사용 또는 적용 해본 경험이 있습니다.</p>
                </div>
                <div className='my_name_sk' data-aos="fade-right" data-aos-duration="1000">
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/external-basicons-color-edtgraphics/50/000000/external-Pen-office-stationery-basicons-color-edtgraphics.png"/><p className='inner_pt'>Studying</p></p>
                    <p className='my_skills_sum'>현재 더 나은 개발자가 되기위해 <span>TypeScript, 알고리즘</span>을 공부하고 있습니다.</p>
                    <p className='my_skills_sum'>현업에서의 원활한 소통을 위해 <span>백엔드</span> 관련 지식을 습득하고 있습니다.</p>
                </div>
            </div>
        </div>
    )
}
