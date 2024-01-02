import React from "react";
import './App.css';
import MyHeader from './MyHeader';
import Counter from "./Counter";
import Container from "./Container";

function App() {

  let name = '리액트';

  const style = {
    App: {
      backgroundColor : "black",
    },
    h2 : {
      color : "red",
    },
    bold_text : {
      color : "green",
    }
  };

  const func = () => { // 숫자나 문자열만 포함 가능
    return 'func';
  }

  const number = 5;

  const counterProps = { // 저런 복수의 객체 프로퍼티 가져올떄 {...} - 스프레드 연산자로 연결 및 가져옴
    c : 3,
    d : 4,
    e : 5,
    f : 7,
    g : 8,
    h : 9,
  }

  return (
    <div style = {style.App}>
        <h2 style = {style.h2}>안녕 리액트 : {name}, {func()}</h2>
        <b style = {style.bold_text}>        
          {number} 는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
        <Container>
        <MyHeader />        
        <Counter a = {1} b = {2} {...counterProps}/> 

        </Container>
    </div>
  );
} // 현재 Counter 컴포넌트는 App 컴포넌트의 자식으로 선언 되어 있음

// ★ 부모 컴포넌트에서 자식 컴포넌트에게 어떤 값을 이름 붙여 전달하는 방식 - Prop! (객제 방식 전달)

export default App; // es 모듈 사용! - 단 export default는 한번만 선언 가능


// JSX 문법 정리

/*
  1) 닫힘 규칙 : 여는 태그가 있으면 꼭 닫는 태그도 존재
  <MyFooter /> : self-closing 태그

  2) 최상위 태그 규칙 : 모든 태그를 감싸고 있는 가장 바깥의 태그, <div className="App">
  -- import React from "react"; 선언 , 최상위 태그 대신 <React.Fragment>로 대체

  리액트의 기능을 하지 않는 컴포넌트는 굳이 리액트 임포트 안해도 됨

  3) 인라인 스타일링 : CSS 파일 안쓰고 실행하는 방식

*/