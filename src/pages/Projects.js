import React , { useState } from 'react'
import '../css/projects.css';
import MyProject from './MyProject';
import usedcar from '../images/mockautobell.png';
import todoimgs from '../images/ang.png';
import bookapi from '../images/reactbooks.png';
import htmlport from '../images/htmlport.png';
import movielist from '../images/movielist.png';
import newppo from '../images/newppo.png';
import boardimg from '../images/board.png';
import Modalproject from './Modalproject';

export default function Projects(props) {
  const [classNames, setClassNames] = useState('good');
  return (
    <div className={`projects ${props.mode}`}>
        <h1 className={`aboutme_h1 ${props.mode} ${classNames}`}>PROJECTS</h1>
        <div className={`projects_main ${props.mode}pro right_${classNames}`}>
          <Modalproject title='현대모비스 오토벨 중고차 사이트'
          lesstime='2주'
          gitlink='https://github.com/kangminhyuk1111/react_usedcar'
          liveserver='#'
          summary="시발스톤"
          feelings='대부분의 중고차 사이트가 CSR로 만들어 진 것을 보고 중고차 사이트를 SPA사이트로 만들어 보면 어떨까?
          라는 생각에 만들어 보기 시작했습니다. 기존에 react로 UI적인 부분을 편리하게 만들었고 정보와 데이터베이스들을 관리하는 서버를 만들어 보고 공부하기위해
          nodejs를 접했습니다. nodejs로 어떻게 서버를 구축하고 만들어나가는지 알게 되었고, 서버에서 DB에 접근해서 어떻게 정보들을 가져 올 수 있는지
          공부하였고 프로젝트에 접목시켰습니다. 이를 통해 프론트엔드와 백엔드의 흐름을 이해하게 되었고 더 나아가 데이터베이스에 접근
          선택, 수정 등 기본적인 SQL이해하는데 도움이 되었던 프로젝트였습니다.'
          projectImg={usedcar}
          mode={props.mode}
          shortsummary='중고차 검색 기능을 REACT+NODEJS+MYSQL기반 풀스택으로 구현한 소규모 프로젝트'
          usedskills='REACTJS(REACT-ROUTER-DOM) · MYSQL · NODEJS · MUI Library'/>
          <MyProject title='네이버 API를 활용한 책 검색 사이트'
          lesstime='4일'
          gitlink='https://github.com/kangminhyuk1111/react-book-api'
          liveserver='#'
          summary='네이버 개발자 사이트에 네이버 API의 많은 기능중 하나인 책 검색 API를 활용하여 만든 책 검색 사이트 입니다.
          네이버 API를 사용하는 법을 익힌 프로젝트이며 사이트의 공식가이드를 통해 사용법을 익혔습니다.
          오픈 API 의 종류를 알게 되었고 내 애플리케이션은 어떻게 등록하는지 그리고 발급후 키를 어떻게 어디에 넣어서
          내가 작성한 코드가 작동하게 하는지 등 네이버 API를 익혔습니다.'
          feelings='이 프로젝트를 통해 특정 사이트에서 정보를 받아와서 그 정보를 조회하고 화면에 도출해내는 법을 알게되었고
          다른 사이트들 예를들어 카카오 개발자 사이트, 공공데이터포털 등등 어떻게 정보를 가져오고 사용하는지 알게 되었습니다.
          이 경험을 통해 필요한 정보들을 보다 자유롭게 가져와서 사용 할 수 있게 되어서 기뻤습니다.'
          projectImg={bookapi}
          mode={props.mode}
          shortsummary='Naver Developers Open API를 이용하여 제작한 프로젝트'
          usedskills='REACTJS, MUI Library, Naver DEV API'/>
          <MyProject title='게시판 - REACT'
          lesstime='2주'
          gitlink='https://github.com/kangminhyuk1111/react_portfolio'
          liveserver='#'
          summary="REACTJS와 NODEJS-MYSQL을 이용한 풀스택 프로젝트 입니다. 게시판 기능을 구현하였으며 로그인시에만 작성할 수 있도록
          LocalStorage를 이용하였으며 회원가입 로그인 로그아웃 기능을 구현하였습니다. 추가로 10개이상의 글이 보여지는 것을 막기위해
          페이지네이션기능을 구현 하였으며 전체보기와 제목으로 검색 할 수있도록 검색창도 제작하였습니다. 글을 눌러서 볼때마다 조회수가
          올라가도록 조회수 기능도 구현하였습니다."
          feelings='게시판 기능을 구현하면서 많은 것을 깨달을수 있었고 프론트에서 서버에 접근해 DB에서 가공한 데이터들을
          가져오는 기능을 구현했을때 기뻤습니다. 작은 프로젝트이지만 거듭하면서 기능을 계속추가하였고 뿌듯함을 많이 느꼈던 프로젝트 였습니다.
          처음에는 글작성 기능만 넣었지만 하나하나 넣다보니 로그인 로그아웃과 회원가입기능 그리고 조회수 글 검색 조회등 살을 붙여나가는
          작업이 의미있었던 작업이였습니다.'
          projectImg={boardimg}
          mode={props.mode}
          shortsummary='프론트엔드와 백엔드의 통신을, MySQL의 CRUD를 이해하기 위해 만든 게시판'
          usedskills='REACTJS, NODEJS, MYSQL, MUI Library '/>
           <MyProject title='API 통신을 이용한 인기영화 조회 웹사이트'
          lesstime='1주'
          gitlink='https://github.com/kangminhyuk1111/https---github.com-kangminhyuk1111-moviesList'
          liveserver='#'
          summary="데이터 통신을 이해하기 위해 진행한 프로젝트이며 YTS라는 웹사이트를 이용했습니다. YTS 웹사이트 안에서
          영화 데이터 API를 이용하였으며, 이 API는 웹 사이트에 추천하는 영화 20선의 데이터를 받아왔습니다.
          Material UI를 이용한 기능들을 추가 하였습니다."
          feelings='다양한 데이터를을 받아오고 사용하는 개념을 익힐 수 있었으며 axios library 를 이용해 데이터를 보다 손쉽게
           가져 올 수 있었습니다. 데이터 API를 통해 데이터를 요구했을때 어떤식으로 데이터를 받아오는지 그리고 어떻게 도출해낼수있는지
           데이터 통신의 기본을 알 수 있었습니다. 그리고 새롭게 알게 된 Material UI library를 어떻게 사용 할 수 있는지 이해하고 알 수 있게 되었습니다.'
          projectImg={movielist}
          mode={props.mode}
          shortsummary='axios를 이용하여 외부 Open API와 통신을 배운 프로젝트'
          usedskills='REACTJS, MUI Library, YTS Data API, Axios'/>
          <MyProject title='포트폴리오 웹사이트 - REACT'
          lesstime='2주'
          gitlink='https://github.com/kangminhyuk1111/react_portfolio'
          liveserver='#'
          summary="기존에 HTML CSS JS로 작업한 포트폴리오 웹사이트를 보다 편하고 좋게 만들기 위해 제작한 사이트입니다.
          ReactJS를 이용해 보다 편리하게 만들었으며, 코드를 재사용 하여 시간을 절감 할 수 있었습니다.
          CSS는 Tailwind css를 이해하기위해 몇개의 컴포넌트에 Tailwind css를 이용했습니다.
          또한 npm사이트에서 React라이브러리를 사용하여 조금 더 빠르게 제작하였습니다.
          추가로 작업중 눈의 피로함을 느껴서 다크모드와 라이트모드를 추가해 사용자의 입장에서 조금 더 편하게 볼 수 있도록
          만들었습니다."
          feelings='만들어 놓았던 포트폴리오에서 좀 더 업그레이드 하고싶은 마음에 시작하였고 실제로 React를 이해하는데
          많은 도움을 주었습니다. 기존에 class형 컴포넌트를 사용했지만 함수형 컴포넌트로 바꾸었고,
           state와 props의 개념을 확실하게 이해 할 수 있었습니다. 어떻게하면 더 심플하고 깔끔하게 보일 수 있을지 UI적인
           부분도 많이 공부 할 수 있었습니다.'
          projectImg={newppo}
          mode={props.mode}
          shortsummary='프론트엔드 개발자가 되기위해 되어가는 과정을 소개하기위한 템플릿'
          usedskills='REACTJS(REACT-ROUTER-DOM), Tailwind CSS, Npm Library'/>
          <MyProject title='포트폴리오 웹사이트'
          lesstime='1주'
          gitlink='https://github.com/kangminhyuk1111/portfolio-project'
          liveserver='https://kangminhyuk1111.github.io/portfolio-project/'
          summary="HTML CSS JS를 이용하여 저를 소개할수 있는 웹사이트를 만들었습니다.
          개발 시작후 초창기에 만들었으며 HTML 표준 마크업에 근거하여 제작하려고 노력했습니다."
          feelings='웹 개발에 기본이 되는 HTML CSS JS를 배우고난후 프론트엔드 개발자가 되고싶었습니다.
          그러던 와중 프론트엔드 개발자 분들의 포트폴리오들을 보게 되었고 "아 나도 저런사람들 처럼 나를 소개할수 있는
           웹 사이트를 만들어 보고싶다." 라는 생각이들어 만들어 보게 되었습니다. HTML CSS 의 기본을 익히게 해주었으며,
           JS를 통해 페이지에 동적임 움직임을 주는법을 알 수 있게되었습니다.'
          projectImg={htmlport}
          mode={props.mode}
          shortsummary='html,css,vanila javascript로 제작한 웹페이지. 홈페이지의 기본적인 레이아웃 구성을 이해한 프로젝트'
          usedskills='HTML, CSS, JAVASCRIPT'/>
        </div>
    </div>
  )
}
