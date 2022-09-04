import React, { useState, useEffect } from 'react'
import '../css/main.css';

export default function Main(props) {
    return (
        <div className={`main`}>
            <div className='intro_left'>
                <p className='left_title'>Intro</p>
                <div className='intro_left_top'>
                    <p className='intro_name_1'>Kang</p>
                    <p className='intro_name_2'>Min Hyuk</p>
                </div>
                <div className='intro_left_bottom'>
                    <p className=''>빠르게 변화하는 트렌드,</p>
                    <p className=''>사용자들의 보다 나은 경험,</p>
                    <p className=''>그것이 저의 목표입니다.</p>
                </div>
            </div>
            <div className='intro_right'>
                <div className='right_birth'>
                    <p className='right_title'>Birth</p>
                    <p className='right_second'>2000. 02. 22</p>
                </div>
                <div className='right_education'>
                    <p className='right_title'>Education</p>
                    <p className='right_second'>2015. 03 ~ 2018. 02 영남고등학교 졸업</p>
                    <p className='right_second'>2018. 03 ~ 2019. 07 대구한의대학교 중퇴</p>
                    <p className='right_second'>2022. 08 ~ 학점은행제 컴퓨터공학 수강중</p>
                    <p className='right_second_1'>2021. 08 ~ 2022. 05 코리아IT아카데미 대구지점</p>
                    <div className='right_education_div'>
                        <div className='w-50'>
                            <p className='right_second'>2021. 11 ~ 2022. 05 FrontEnd Dev</p>
                            <p className='right_second'>2021. 12 ~ 2022. 04 웹 개발</p>
                            <p className='right_second'>2021. 08 ~ 2021. 11 Python</p>
                        </div>
                        <div className='pl-72'>
                            <p className='right_second'>2021. 10 ~ 2021. 12 Java</p>
                            <p className='right_second'>2021. 09 ~ 2021. 11 Linux</p>
                            <p className='right_second'>2021. 11 ~ 2022. 12 DBMS</p>
                        </div>
                    </div>
                </div>
                <div className='right_education'>
                    <p className='right_title'>Certificate</p>
                    <div className='right_education_div_1'>
                        <p className='right_second'>2019. 05 운전면허 1종 보통</p>
                        <p className='right_second_2'>2022. 08 쇼핑몰 관리사</p>
                    </div>
                </div>
                <div className='right_education'>
                    <p className='right_title'>Experience</p>
                    <p className='right_second'>2022. 09 ~ 2022. 12 (주)유비엔</p>
                </div>
            </div>
        </div>
    )
}
