import React, { Component } from 'react'; // JSX를 사용하기 위해 import
import ReactDOM from 'react-dom';

/* 조건부 예제 */
class Main extends Component {
    render() {
        const value = 1;
        return ( // JSX 리턴
            <div>
                <b>삼항연산자 사용</b>
                {
                    /* 삼항연산자 : true 일때와 false 일 때 다른 것을 보여줌 */
                    1 + 1 === 2
                    ? (<div>맞아요 !</div>)
                    : (<div>틀려요 !</div>)

                }
                <br/>
                <b>AND연산자 사용</b>
                {
                    /* AND연산자 : true 일때만 보여줌 */
                    1 + 1 === 2 && (<div>맞아요!</div>)
                }
                <br/>
                <b>IIFE 사용</b>
                {
                    /* IIFE */
                    (() => { // 화살표 함수 사용 : this, arguments, super 개념이 없는 익명 함수
                        if (value === 1) return (<div>하나</div>)
                        if (value === 2) return (<div>둘</div>)
                        if (value === 3) return (<div>셋</div>)
                    })()
                }
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
/*
    브라우저 상에 리액트 컴포넌트를 보여주기 위해서는 ReactDOM.render() 함수를 사용
    첫번째 파라미터: 렌더링 할 결과물
    두번째 파라미터: 컴포넌트를 그릴 DOM --> id가 root인 DOM을 찾아서 그리도록 설정
*/

