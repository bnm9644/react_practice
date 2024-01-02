const OddEvenResult = (count) => {
    console.log(count);
    return <>{count % 2 ===0 ? '짝수' : '홀수' }</>;
};

export default OddEvenResult; 

// count가 바뀔때마다 렌더링, 
// 부모가 내려주는 props 가 변경 되면 다시 렌더를 하게 됨

// 본인이 관리하고 가진 state 가 바뀔때마다 리렌ㄷ, 