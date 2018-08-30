
Props
=================================================================

컴포넌트에는 함께 동작할 데이터가 있어야 합니다. 컴포넌트와 데이터를 묶을 수 있는 방법에는 두가지가 있는데  
그 중 한가지가 props 입니다.

- 만약 컴포넌트가 일반적인 자바스크립트 함수라면, props는 함수의 입력(input)이 됩니다.  
    은유적으로 표현해보면, 컴포넌트는 입력(props라고 부르는)을 받아 절차를 거쳐서 JSX 코드를 넘겨줍니다.  
      

    <img src="https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-Tutorial-Component-with-prop.jpg">  
      
- props에 있는 데이터는 컴포넌트에 접근할 수 있지만 props는 변하지 않으며 상의하달식이어야 합니다.
- 즉, 부모컴포넌트는 어떤 데이터이든지 props로서 자식컴포넌트에게 전달할 수 있지만 자식컴포넌트는 전달받은 props를 수정하지             못합니다.
    ```javascript
    const Button = (props) => {
        // props are read only
        props.count = 21;
    }
    // "Cannot assign to read-only" TypeError 발생!
    ```
- props는 주로 사용할 데이터 중 변동되지 않는 데이터를 다룰 때 사용합니다.
- `render()` 메소드의 내부에 `{ this.props.propsName }` 형식을 넣고,   
    컴포넌트를 사용할 때 `< >` 괄호 안에 `propsName="value"`를 넣어 값을 설정합니다.
- props의 기본값을 설정할 때는 컴포넌트 클래스 하단에 `defaultProps`를 삽입합니다.  
    ```javascript
    import React, { Component } from 'react';

    class MyName extends Component { // 클래스형 컴포넌트에서 사용
        static defaultProps = {
            name: '기본이름'
        }
        render() {
            return (
                <div>
                    안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
                </div>
            );
        }
    }

    export default MyName;
    ```

    ```javascript
    import React, { Component } from 'react';

    class MyName extends Component { // 함수형 컴포넌트에서 사용
        render() {
            return (
                <div>
                    안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
                </div>
            );
        }
    }

    MyName.defaultProps = {
    name: '기본이름'
    };

    export default MyName;
    ```


### PropsTypes  
- 컴포넌트에서 원하는 props의 Type과 전달된 Type이 일치하지 않을 때 콘솔에서 오류 메시지가 나타게 하고 싶을 때 사용합니다.
- 이를 통하여 필수 props를 지정할 수 있으며 props를 지정하지 않으면 콘솔에 오류 메시지가 나타나게 됩니다.
- React v15.5부터는 PropsTypes는 deprecated되고 prop-types라는 패키지로 이동되어, 따로 설치해야 해야 합니다.  
    https://reactjs.org/docs/typechecking-with-proptypes.html
    ```
    $ npm install --save prop-types  or  $ yarn add prop-types
    ```
- 사용되는 컴포넌트 마다 import 해주어야 합니다.
    ```
    import PropTypes from 'prop-types';
    ```


### Props
- Props 코드작성

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/fISs08P6eMc/0.jpg)](https://www.youtube.com/watch?v=tZLQ-cNCf70&index=8&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH)