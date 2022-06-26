import React from 'react'
import todoimgs from '../images/todoimgs.jpg';
import usedcar from '../images/usedcar.jpg';

export default function MyProject() {
  return (
    <div className='myprojects'>
        <div className='myprojects_header'>
            <p>ToDoList</p>
            <p>소요기간 : 1주</p>
            <p><a href='#'>LINK TO GIT HUB</a></p>
            <p><a href='#'>LIVE PAGES</a></p>
        </div>
        <div className='myprojects_summary'>
            <div className='summary_left'>
                <p className='summary_left_top'><h2>설명</h2>프론트엔드 개발자를 위해 공부를 하며 개발을 조금더 효율적으로 할 수있는 React 프레임워크를 알게 되었습니다.
                    React를 이해하기 위해 시작한 프로젝트이며 오늘 할 일을 추가,삭제,성공,수정 기능 기본적인 CRUD를 익혔습니다.
                    기존에 클래스형 컴포넌트로 개발하던 프로젝트를 함수형 컴포넌트로 작업중 변경 하였습니다.
                </p>
                <p className='summary_left_top'><h2>느낀점</h2>
                기존에 JavaScript 언어를 이해하기 위해 작업했던 ToDoList와 비교 했을때 React를 사용 했을때 훨씬 더 간결하고
                유동적인 작업이 가능하다고 느꼈습니다. React를 사용 했을때 코드를 재사용 하여 조금 더 빠르고 편리하게 작업을 할 수 있음을 느꼈습니다.</p>
            </div>
            <div className='summary_right'>
                <img src={usedcar}/>
            </div>    
        </div>      
    </div>
  )
}
