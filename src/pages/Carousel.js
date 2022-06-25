import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='dis'>
            <Slider {...settings} dotsClass='test-css'>
                <Card title='이름'
                second='강민혁'
                third={<i class="fa-solid fa-circle-user"></i>}/>
                <Card title='생년월일'
                second='2000.02.22'
                third={<i class="fa-solid fa-cake-candles"></i>}/>
                <Card title='주소지'
                second='대구광역시 달서구'
                third={<i class="fa-solid fa-house"></i>}/>
                <Card title='연락처'
                second='010-9938-4664'
                third={<i class="fa-solid fa-phone"></i>}/>
                <Card title='이메일'
                second='rkdglqkr12@naver.com'
                third={<i class="fa-solid fa-envelope"></i>}/>
                <Card title='경력'
                second='신입'
                third={<i class="fa-solid fa-pen-to-square"></i>}/>
            </Slider>
        </div>
    );
}
