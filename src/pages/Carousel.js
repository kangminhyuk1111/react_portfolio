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
                <Card title='Name'
                second='강민혁'
                third={<i class="fa-solid fa-circle-user"></i>}/>
                <Card title='Birth'
                second='2000.02.22'
                third={<i class="fa-solid fa-cake-candles"></i>}/>
                <Card title='Address'
                second='대구광역시 달서구'
                third={<i class="fa-solid fa-house"></i>}/>
                <Card title='Tel'
                second='010-9938-4664'
                third={<i class="fa-solid fa-phone"></i>}/>
                <Card title='E-mail'
                second='rkdglqkr12@naver.com'
                third={<i class="fa-solid fa-envelope"></i>}/>
                <Card title='Career'
                second='신입'
                third={<i class="fa-solid fa-pen-to-square"></i>}/>
            </Slider>
        </div>
    );
}
