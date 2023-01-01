import React, { useState, useEffect } from 'react'
import '../css/main.css';
import AOS from "aos";
import "aos/dist/aos.css";
import kakaoPng from '../images/kakao-talk.png'
import emailPng from '../images/email.png';
import velogPng from '../images/velogpng.png';
import gitPng from '../images/gitpng.png';

export default function Main(props) {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className={`main`} id='mainFocus'>
            <div className='intro_left'>
                <p className='left_title' data-aos="fade-right" data-aos-duration="1000">About Me</p>
                <div className='intro_left_top' data-aos="fade-right" data-aos-duration="1000">
                    <p className='intro_name_1'>Kang</p>
                    <p className='intro_name_2'>Min Hyuk</p>
                </div>
                <div className='intro_left_bottom' data-aos="fade-right" data-aos-duration="1000">
                    <p className=''>빠르게 변화하는 트렌드,</p>
                    <p className=''>사용자들의 보다 나은 경험,</p>
                    <p className=''>그것이 저의 목표입니다.</p>
                </div>
                <div className='intro_left_contact' data-aos="fade-right" data-aos-duration="1000">
                    <a href='#' className='contact_png'><img src={kakaoPng}/></a>
                    <a href='mailto:"rkdglqkr12n@naver.com' className='contact_png'><img src={emailPng}/></a>
                    <a href='https://velog.io/@minhyuk00' className='contact_png'><img src={velogPng}/></a>
                    <a href='https://github.com/kangminhyuk1111' className='contact_png'><img src={gitPng}/></a>
                </div>
            </div>
            <div className='intro_right'>
                <div className='right_birth' data-aos="fade-right" data-aos-duration="1000">
                    <p className='right_title'>Birth</p>
                    <p className='right_second'>2000. 02. 22 (만 22세)</p>
                </div>
                <div className='right_education' data-aos="fade-right" data-aos-duration="1000">
                    <p className='right_title'>Education</p>
                    <p className='right_second'>2015. 03 ~ 2018. 02 영남고등학교 졸업</p>
                    <p className='right_second'>2018. 03 ~ 2019. 07 대구한의대학교 중퇴</p>
                    <p className='right_second'>2022. 08 ~ 학점은행제 컴퓨터공학 수강중</p>
                    <p className='right_second_1'>2021. 08 ~ 2022. 05 코리아IT아카데미 대구지점</p>
                    <div className='right_education_div'>
                        <div className='w-50'>
                            <p className='right_second_3'>2021. 11 ~ 2022. 05 FrontEnd Dev</p>
                            <p className='right_second_3'>2021. 12 ~ 2022. 04 웹 개발</p>
                            <p className='right_second_3'>2021. 08 ~ 2021. 11 Python</p>
                        </div>
                        <div className=''>
                            <p className='right_second'>2021. 10 ~ 2021. 12 Java</p>
                            <p className='right_second'>2021. 09 ~ 2021. 11 Linux</p>
                            <p className='right_second'>2021. 11 ~ 2022. 12 DBMS</p>
                        </div>
                    </div>
                </div>
                <div className='right_education' data-aos="fade-right" data-aos-duration="1000">
                    <p className='right_title'>Certificate</p>
                    <div className='right_education_div'>
                        <div className='w-45'>
                            <p className='right_second'>2019. 05 운전면허 1종 보통</p>
                            <p className='right_second'>2022. 08 쇼핑몰 관리사</p>
                        </div>
                    </div>
                </div>
                <div className='right_education' data-aos="fade-right" data-aos-duration="1000">
                    <p className='right_title'>Experience</p>
                    <p className='right_second'>2022. 09 ~ 2022. 12 (주)유비엔</p>
                    <p className='right_second'>인공지능 학습용 데이터 구축사업 (<a href='http://dltms.k-agridata.com/'>dltms.k-agridata.com</a>)</p>
                </div>
            </div>
        </div>
    )
}
