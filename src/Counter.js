import React,{useState} from "react";
import OddEvenResult from "./OddEventResult";

const Counter = ({initialValue}) => { // props의 initialValue 값 가져옴

    // 상태 - state ,
    // 부모 컴포넌트에서 자식컴포넌트에 어떤 값을 전달 시  - props! 
    // props는 매개변수를 통해 받아 사용 가능, ★ 단 객체 안에 담김 비구조화 할당을 통해서도 가져올수 있음
    // 점(.) 표기법으로도 사용 가능    

    const [count,setCount] = useState(initialValue);

    // count : 상태 값 , setCount : 상태 변화 함수 , 0: 초기 값으로 사용 , 동일 기능의 컴포넌트도 사용 가능,

    const onIncrease = () => {
        setCount(count+1); 
    } 

    const onDecrease = () => {
        setCount(count-1); 
    }

    return ( // 화면을 다시 그려 새로 로딩, - reRender , 컴포넌트는 자신이 가진 상태가 변화하면, 화면을 다시 그려 reRender를 실행, 함수 재호출
        <div>
        <h2>{count}</h2>
        <button onClick={onIncrease}> + </button>
        <button onClick={onDecrease}> - </button>        
        <OddEvenResult count = {count}/>
        </div>
    );
}

//defaultProps 사용 시 , 전달받지 못한 props 기본 값을 설정,  에러 방지
Counter.defaultProps = {
    initialValue : 1
}

export default Counter;