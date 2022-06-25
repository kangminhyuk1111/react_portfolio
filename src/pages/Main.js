import React from 'react'
import '../css/main.css';
import profile from '../images/profile.jpg';
import profile1 from '../images/profile1.jpg';

export default function Main() {
    return (
        <div className='main'>
            <div className='main_inner'>
                <div className='main_left'>
                    <div className='main_inner_top'>
                        <p>👨‍💻</p>
                        <p className='top_p_1'>개발자 이력서</p>
                        <p className='top_p_2'>FRONTEND DEVELOPER</p>
                        <p className='top_p_2'>안녕하세요, 개발자 강민혁이라고 합니다.</p>
                    </div>
                    <div className='main_inner_summary'>
                        <p></p>
                        <p className='inner_p'><span className="strong">코드 리뷰 등을 통한 기술적 토론을 즐기며</span>, 평소에 개발하면서 고민되는 지점이 생길 때마다 글로 정리하고 이것저것 꼼꼼히 기록하는 일을 좋아합니다. 이외에도 개발 커뮤니티 활동에 적극적으로 참여하려하고 새로운 아이디어가 생각나면 사이드 프로젝트를 진행하는 등 다양한 방식으로 개발을 즐기고 있습니다.</p>
                        <p className='inner_p'>
                            <span className="strong">개발에 관심을 가지고 여러 사람들과 함께 지식을 공유하는 것을 즐기며</span> 새로운 지식들과 오픈소스들을 함께 공유하고 나누고 싶습니다.</p>
                        <p className='inner_p'>어려운점은 함께 극복해나가려하고 누구보다 열심히 노력하고 배움을 두려워 하지않는 개발자가 되는 것이 꿈입니다.</p>
                        <p className='myinfo_links'>📧<a href='#'>rkdglqkr12@naver.com</a></p>
                        <p className='myinfo_links'>🐱<a href='#'>Blog</a></p>
                        <p className='myinfo_links'>🐔<a href='#'>Github</a></p>
                        <p className='myinfo_links'>🌸<a href='#'>Instagram</a></p>
                    </div>
                </div>
                <div className='main_right'>
                    <div className='right_right'>
                        <img src={profile} />
                    </div>
                </div>
            </div>

        </div>
    )
}
