import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
   
    /*
    // Not required anymore
    constructor() {
        super();
        this.state = {
          count: 1
        }
    }
    */
     
    state = { count: 1 };
    
    // prevState 는 이전 state 를 레퍼런스하며 최신 상태로 값을 유지시켜줍니다.
    // setState() 는 컴포넌트를 다시 렌더링하며, stateful component가 동작하게 됩니다.
    handleCount(value) {
      this.setState((prevState) => {
        count: prevState.count +1
      });
    }
   
    // 현재 count 값을 보여주기 위해 render() 안에 클래스 메서드를 사용하려면 중괄호 안에 state를 위치시켜야 합니다.
    render() {
      return (
          <section>
            <h2>Stateful Component vs. Stateless Component</h2>
            <b>Current count: {this.state.count}</b>
            {/* 여기서 this 키워드는 현재 컴포넌트의 인스턴스를 참조*/}
          </section>
          );
      }
     
  }

ReactDOM.render(<App />, document.getElementById('app'));

