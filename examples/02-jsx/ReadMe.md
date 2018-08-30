
JSX (JavaScript Xml)
=================================================================

Javascript + XML을 합쳐서 탄생한 기존 자바스크립트의 확장 문법입니다.

리액트 개발을 쉽게 하기 위해서, HTML과 비슷한 문법으로 작성을 하면 이를 React.createElement를 사용하는 자바스크립스 형태로 변환시켜줍니다.  
XML 형태의 코드를, 자바스크립트로 변환해야 하기 때문에 JSX를 사용하기 위해서는 몇가지 규칙을 준수해주어야 합니다.  

- **꼭 닫혀야 하는 태그**  
    `<div>`태그를 열었으면 `</div>`태그를 꼭 닫아주어야 합니다.

- **감싸져 있는 엘리먼트**  
    두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져 있어야 합니다.  
    ```javascript
    import React, { Component } from 'react';

    class App extends Component {
        render() {
            return (
                <div>
                    <div>Hello</div>
                    <div>Bye</div>
                </div>
            )
        }
    }

    export default App;
    ```
    단순히 감싸기 위해서 새로운 div를 사용하는 것이 마음에 들지 않는 경우 또는 스타일 관련 설정, table 관련 태그를 작성하는 경우
    ```javascript
    <Fragment>
        <div>Hello</div>
        <div>Bye</div>
    </Fragment>
    ```

- **JSX 안에 자바스크립트 값 사용하기**  
    ```javascript
    import React, { Component } from 'react';

    class App extends Component {
        render() {
            const name = 'react';
            return (
                <div>
                    hello {name}!
                </div>
            );
        }
    }

    export default App;
    ```
- **조건부 렌더링**  
    JSX 내부에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 사용하거나, AND 연산자 사용합니다.  
    반면 if문은 사용할 수 없으며 사용하려면 IIFE(즉시 실행 함수 표현)을 사용해야 합니다.  

- **style과 className**  
    리액트 컴포넌트에서는 class 대신에 className을 사용합니다  

- **주석**  
    ```javascript
    import React, { Component } from 'react';

    class App extends Component {
        render() {
            return (
            <div>
                {/* 주석은 이렇게 */}
                <h1 // 태그 사이에>리액트</h1>
            </div>
            );
        }
    }

    export default App;
    ```


### JSX 기본 문법
- Hello World 만들기
- const, let, 화살표함수 사용법
- if문 사용법

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/fISs08P6eMc/0.jpg)](https://www.youtube.com/watch?v=8RVoVvgaQdY&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH&index=6)


### JSX 기본 문법2
- style 사용법
- className 사용법
- 주석 사용법

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/fISs08P6eMc/0.jpg)](https://www.youtube.com/watch?v=N96EJm09Pxo&index=7&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH)