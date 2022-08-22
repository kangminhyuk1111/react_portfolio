import React, { useState } from 'react';
import '../css/aboutmesu.css';
import '../css/aboutme.css';
import '../css/skillssu.css';

export default function AboutmeSU(props) {
    const [classNames ,setClassNames] = useState('good');
    return (
        <div className={`aboutmy ${props.mode}linear`}>
            <h1 className={`aboutme_h1 right_good`}>SKILLS</h1>
            <div className={`about_my showText_3s`}>
                <div className='my_name_sk'>
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/html-5--v1.png" /><p className='inner_pt'>HTML</p></p>
                    <p className='my_skills_sum'>웹 표준과 웹 접근성을 고려한 표준 마크업을 능숙하게 다룰 수 있습니다.</p>
                    <p className='my_skills_sum'>사용자의 입장에서 더욱 보기편하고 좋은 UI를 구성하려 노력합니다.</p>
                </div>
                <div className='my_name_sk'>
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/css3.png" /><p className='inner_pt'>CSS</p></p>
                    <p className='my_skills_sum'>CSS 모듈(CSS-IN-CSS)방식을 주로 사용하며 필요에 따라 CSS-IN-JS로도 스타일링이 가능합니다.</p>
                    <p className='my_skills_sum'>Media Query를 이용한 반응형 웹 페이지를 제작 가능합니다.</p>
                    <p className='my_skills_sum'>React에서의 Styled-Component를 사용 할 수 있습니다.</p>
                    <p className='my_skills_sum'>CSS 전처리기인 Sass 사용 해본 경험이 있습니다.</p>
                </div>
                <div className='my_name_sk'>
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/javascript--v1.png" /><p className='inner_pt'>JavaScript</p></p>
                    <p className='my_skills_sum'>ES2015+ 이상의 Modern JavaScript 문법에 익숙합니다.</p>
                    <p className='my_skills_sum'>JavaScript 라이브러리인 JQuery 사용 해본 경험이 있습니다.</p>
                </div>
                <div className='my_name_sk'>
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png" /><p className='inner_pt'>React</p></p>
                    <p className='my_skills_sum'>효율적인 개발을 위한 React 사용에 익숙합니다.</p>
                    <p className='my_skills_sum'>Class Component와 Function Component 두 종류를 모두 사용 할 수 있습니다.</p>
                    <p className='my_skills_sum'>React Custom Hooks를 제작 또는 사용 할 수 있습니다.</p>
                    <p className='my_skills_sum'>상태관리를 위해 Redux ,Context API를 사용 해본 경험이 있습니다.</p>
                </div>
                <div className='my_name_sk'>
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/nodejs.png" /><p className='inner_pt'>NodeJS</p></p>
                    <p className='my_skills_sum'>Express를 이용한 서버 구축을 할 수 있습니다.</p>
                    <p className='my_skills_sum'>REST API로직에 따라 Database(MySQL)에 접근하여 작업을 처리 할 수 있습니다.</p>
                </div>
                <div className='my_name_sk'>
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/fluency/48/000000/mysql-logo.png" /><p className='inner_pt'>MySQL</p></p>
                    <p className='my_skills_sum'>데이터베이스의 기본적인 개념을 알고 이해 할 수있습니다.</p>
                    <p className='my_skills_sum'>SQL문을 활용한 테이블 생성과 검색, 수정 삭제 처리 기능을 처리할 수 있습니다.</p>
                </div>
                <div className='my_name_sk'>
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/color/48/000000/folder-invoices--v1.png"/><p className='inner_pt'>Libraries</p></p>
                    <p className='my_skills_sum'>BootStrap5, Tailwind CSS, Material UI, JQuery의 라이브러리를 사용 또는 적용 해본 경험이 있습니다.</p>
                </div>
                <div className='my_name_sk'>
                    <p className='my_skills_sum_header'><img src="https://img.icons8.com/external-basicons-color-edtgraphics/50/000000/external-Pen-office-stationery-basicons-color-edtgraphics.png"/><p className='inner_pt'>Studying</p></p>
                    <p className='my_skills_sum'>현재 더 나은 개발자가 되기위해 AWS,TypeScript를 공부하고 있습니다.</p>
                    <p className='my_skills_sum'>현업에서의 원활한 소통을 위해 백엔드 관련 지식을 습득하고 있습니다.</p>
                </div>
            </div>
        </div>
    )
}
