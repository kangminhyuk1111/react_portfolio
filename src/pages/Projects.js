import React from 'react'
import '../css/projects.css';
import MyProject from './MyProject';
import usedcar from '../images/usedcar.jpg';
import todoimgs from '../images/todoimgs.jpg';

export default function Projects() {
  return (
    <div className='projects'>
        <h1 className='skills_h1'>PROJECTS</h1>
        <div className='projects_main'>
          <MyProject title='ToDoList'
          lesstime='1주'
          gitlink='#'
          liveserver='#'
          summary='프론트엔드 개발자를 위해 공부를 하며 개발을 조금더 효율적으로 할 수있는 React 프레임워크를 알게 되었습니다.
          React를 이해하기 위해 시작한 프로젝트이며 오늘 할 일을 추가,삭제,성공,수정 기능 기본적인 CRUD를 익혔습니다.
          기존에 클래스형 컴포넌트로 개발하던 프로젝트를 함수형 컴포넌트로 작업중 변경 하였습니다.'
          feelings='기존에 JavaScript 언어를 이해하기 위해 작업했던 ToDoList와 비교 했을때 React를 사용 했을때 훨씬 더 간결하고
          유동적인 작업이 가능하다고 느꼈습니다. React를 사용 했을때 코드를 재사용 하여 조금 더 빠르고 편리하게 작업을 할 수 있음을 느꼈습니다.'
          projectImg={todoimgs}/>
          <MyProject title='현대모비스 오토벨 중고차 사이트'
          lesstime='2주'
          gitlink='#'
          liveserver='#'
          summary="평소에 자동차에 관심이 있고 대기업의 중고차 시장 출범소식을 듣고 검색 해 보니 현대에서
          만든 '현대모비스 오토벨' 이라는 사이트에 관심이 가게 되어 해본 프로젝트 입니다. 프로젝트 안에는 상세검색기능
          차량명 검색기능, 상세정보보기 클릭시 차량의 상세정보가 담긴 페이지로 이동하게 만들었습니다.
          페이지 이동은 react-router를 이용했으며 간단한 nodejs 서버를 구축하여 데이터베이스(MySQL)에 접근하여
          차량의 필요한 정보들을 받아 올 수 있도록 만들었습니다. 상세정보 클릭시 차량의 고유한 일련번호를 URL Parameter로
          넘겨준뒤 받아온 일련번호로 해당 페이지에 조회 할 수 있도록 만들었습니다."
          feelings='기존에 react로 UI적인 부분을 편리하게 만들었고 정보와 데이터베이스들을 관리하는 서버를 만들어 보고 공부하기위해
          nodejs를 접했습니다. nodejs로 어떻게 서버를 구축하고 만들어나가는지 알게 되었고, 서버에서 DB에 접근해서 어떻게 정보들을 가져 올 수 있는지
          공부하였고 프로젝트에 접목시켰습니다. 이를 통해 프론트엔드와 백엔드의 흐름을 이해하게 되었고 더 나아가 데이터베이스에 접근
          선택, 수정 등 기본적인 SQL이해하는데 도움이 되었던 프로젝트였습니다.'
          projectImg={usedcar}/>
        </div>
    </div>
  )
}
