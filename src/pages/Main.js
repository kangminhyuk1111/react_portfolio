import React, { useState, useEffect } from 'react'
import '../css/main.css';
import profile from '../images/profile.jpg';

export default function Main(props) {
    const [classNames, setClassNames] = useState('good');
    return (
        <div className={`top_main`}>
            <div className={`main ${props.mode}`}>
                <div className={`main_inner ${props.mode}`}>
                    <div className={`main_left ${props.mode}`}>
                        <div className='main_inner_summary'>
                            <div className={`main_inner_top ${props.mode} showTextSlow`}>
                                <p className='inner_top_icon showTextSlow'>👨‍💻</p>
                                <p className='top_p_2 showTextSlow'>빠르게 바뀌는 트렌드 속 사용자들의 더 나은 경험을 위해 노력하는</p>
                                <p className='top_p_2 showTextSlow'><span className='top_p_1'>FRONTEND DEVELOPER 강민혁</span>입니다.</p>
                            </div>
                            <p className='inner_p showText_3s'>컴퓨터 언어를 사용해 구현하고자 하는 프로그램이 시각화되는 매력에 빠져 개발자가 되고 싶습니다. </p>
                            <p className='inner_p showText_4s'>
                                사용자의 입장에서 느끼는 좋은 서비스가 무엇인지 다양한 관점에서 고민하고, 다양한 개발자분들과 함께 정보를 공유하며 제가 가진 능력을 적극적으로 성장시켰습니다.</p>
                            <p className='inner_p_1 showText_4s'>진취적이며 능동적으로 업무에 임하는 개발자가되겠습니다.</p>

                            <div className='dis_flex_row'>
                                <div>
                                    <p className='my_name_title top_p_2'>학력</p>
                                    <p className='my_name_sum'>학점은행제 컴퓨터공학 수강 중 2022.08 ~</p>
                                    <p className='my_name_sum'>대구한의대학교 중퇴 2018.03 ~ 2019.07</p>
                                    <p className='my_name_sum'>영남고등학교 졸업 ~2018.02</p>
                                </div>
                                <div className='pl-24'>
                                    <p className='my_name_title top_p_2'>자격 및 면허</p>
                                    <p className='my_name_sum'>운전면허 1종 보통 2019.05 (대구광역시 달서구청)</p>
                                    <p className='my_name_sum'>쇼핑몰관리사 2022.07 (한국교육검정원)</p>
                                </div>
                                <div className='pt-6'>
                                    <p className='my_name_title top_p_2'>교육사항</p>
                                    <p className='my_name_sum'>교육기관 코리아IT 아카데미 대구지점</p>
                                    <p className='my_name_sum'>교육기간 2021.08 ~ 2022.05 (총 10개월)</p>
                                </div>
                                <div className='pl-24 pt-6'>
                                    <p className='my_name_title top_p_2'>교육내용</p>
                                    <p className='my_name_sum'>FrontEnd DEV 2021.11 ~ 2022.05</p>
                                    <p className='my_name_sum'>웹 개발 2021.12 ~ 2022.04</p>
                                    <p className='my_name_sum'>Python 2021.08 ~ 2021.10</p>
                                    <p className='my_name_sum'>Java 2021.10 ~ 2021.12</p>
                                    <p className='my_name_sum'>Linux 2021.09 ~ 2021.11</p>
                                    <p className='my_name_sum'>Python 2021.11 ~ 2021.12</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='main_right showTextTop'>
                        <div className='right_right'>
                            <img src={profile} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
