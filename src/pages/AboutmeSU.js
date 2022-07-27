import React, { useState } from 'react';
import '../css/aboutmesu.css';
import '../css/aboutme.css';

export default function AboutmeSU(props) {
    const [classNames ,setClassNames] = useState('good');
    return (
        <div className={`aboutmy ${props.mode}linear`}>
            <h1 className={`aboutme_h1 ${classNames}`}>PROFILE</h1>
            <div className={`about_my right_${classNames}`}>
                <div className='my_name'>
                    <p className='my_name_sum_header'>이름</p>
                    <p className='my_name_sum'>강민혁 (Kang Min Hyuk)</p>
                </div>
                <div className='my_name'>
                    <p className='my_name_sum_header'>생년월일</p>
                    <p className='my_name_sum'>2022.02.22 (만22세)</p>
                </div>
                <div className='my_name'>
                    <p className='my_name_sum_header'>학력</p>
                    <p className='my_name_sum'>대구한의대학교 중퇴 2018.03 ~ 2019.07</p>
                    <p className='my_name_sum'>영남고등학교 졸업 ~2018.02</p>
                </div>
                <div className='my_name'>
                    <p className='my_name_sum_header'>병역</p>
                    <p className='my_name_sum'>육군 병장 만기전역 2020.02 ~ 2021.08</p>
                </div>
                <div className='my_name'>
                    <p className='my_name_sum_header'>자격 및 면허</p>
                    <p className='my_name_sum'>운전면허 1종 보통 2019.05 (대구광역시 달서구청)</p>
                    <p className='my_name_sum'>쇼핑몰관리사 2022.07 (한국교육검정원)</p>
                </div>
                <div className='my_name'>
                    <p className='my_name_sum_header'>교육사항</p>
                    <p className='my_name_sum'>교육기관 코리아IT 아카데미 대구지점</p>
                    <p className='my_name_sum'>교육기간 2021.08 ~ 2022.05 (총 10개월) </p>
                </div>
                <div className='my_name'>
                    <p className='my_name_sum_header'>교육과정</p>
                    <p className='my_name_sum'>FrontEnd DEV 2021.11 ~ 2022.05</p>
                    <p className='my_name_sum'>웹 개발 2021.12 ~ 2022.04</p>
                    <p className='my_name_sum'>Python 2021.08 ~ 2021.10</p>
                    <p className='my_name_sum'>Java 2021.10 ~ 2021.12</p>
                    <p className='my_name_sum'>Linux 2021.09 ~ 2021.11</p>
                    <p className='my_name_sum'>Python 2021.11 ~ 2021.12</p>
                </div>
            </div>
        </div>
    )
}
