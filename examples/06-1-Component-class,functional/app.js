import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 하나씩 주석을 풀어보면서 실행결과를 확인해보세요

/** 1. Class Component 
 *  React 에서 컴포넌트를 정의 할 때는 보통 EcmaScript 6 에 도입된 class 문법을 사용합니다.
 *  컴포넌트에서 라이프사이클 API를 사용하거나, state를 사용하는 경우에는 꼭 이렇게 정의를 해야합니다.
*/
class BasicContainer extends React.Component {

    render() {
        return (
            <section>
                <h2>Class Component</h2>
                <b>Hello { this.props.name }</b>
            </section>
        );
    }
}



/** 2. Functional Component 
 *  만약에 만들 컴포넌트가 라이프사이클 API 도 사용하지 않고, state 도 사용하지 않고, 
 *  그냥 props만 전달해주면 뷰를 렌더링만 해주는 역할이라면 함수형 컴포넌트 형식으로 컴포넌트를 정의할 수 있습니다.
*/
// function BasicContainer(props) {
//     return (
//         <section>
//             <h2>Functional Component</h2>
//             <b>Hello { props.name }</b>
//         </section>
//     );
// }




/** 3. Functional Component : arrow function(화살표 함수) 사용 */
// const BasicContainer = (props) => {
//     return (
//         <section>
//             <h2>Functional Component use arrow function</h2>
//             <b>Hello { props.name }</b>
//         </section>
//     );
// }




/** 4. 비구조화 할당(Object Destructuring) 문법 사용 */
// const BasicContainer = ({name}) => {
//     return (
//         <section>
//             <h2>Functional Component use Object Destructuring</h2>
//             <b>Hello { name }</b>
//         </section>
//     );
// }

ReactDOM.render(<BasicContainer name="react"/>, document.getElementById('app'));
