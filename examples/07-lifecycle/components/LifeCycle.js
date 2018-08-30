import React, { Component } from 'react';

class LifeCycle extends Component {// 리액트는 컴포넌트가 중요하기때문에..... 그렇게 설명

    state = {
        number: 0
    }
    
    constructor(props) {
        //생성자 함수 : 컴포넌트가 새로 만들어질 때마다 이 함수가 호출됩니다.
        console.log('1. 생성자호출');
        super(props);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // 이 API 는 props 로 받아온 값을 state 로 동기화 하는 작업을 해줘야 하는 경우에 사용됩니다.
        console.log('2. getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        // 이 API 는 컴포넌트가 화면에 나타나게 됐을 때 호출됩니다. 
        // 외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
        console.log('4. componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 성능 최적화를 합니다. 쓸데없는 update가 일어나면 여기서 걸러냅니다.
        // 5 의 배수라면 리렌더링 하지 않습니다.
        if (nextState.number % 5 === 0) {
            console.log('shouldComponentUpdate 5의배수')
            return false;
        }
        console.log('5.shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // DOM 업데이트가 일어나기 직전의 시점입니다.
        // 여기서 리턴 하는 값은 componentDidMount 에서 3번째 파라미터 snapshot 값으로 받아올 수 있습니다.
        console.log('6. getSnapshotBeforeUpdate');
        return null;
      }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 이 API는 컴포넌트에서 render() 를 호출하고난 다음에 발생하게 됩니다.
        console.log('7. componentDidUpdate');
    }

    componentWillUnmount() {
        // 여기서는 주로 등록했었던 이벤트를 제거하고, 만약에 setTimeout 을 걸은것이 있다면 clearTimeout 을 통하여 제거를 합니다. 
        // 추가적으로, 외부 라이브러리를 사용한게 있고 해당 라이브러리에 dispose 기능이 있다면 여기서 호출해주시면 됩니다.
        console.log('componentWillUnmount');
    }

    //    componentWillMount() {
    //     // 리액트 v16.3 에서는 해당 API 가 deprecated 
    //     console.log('componentWillMount (deprecated)');
    // }

    //   componentWillUpdate(nextProps, nextState) {
    //     // 이 API 또한 v16.3 이후 deprecate
    //     console.log(' componentWillUpdate (deprecated)');
    // }

    //     componentWillReceiveProps(nextProps) {
    //     // 이 API 또한 v16.3 부터 deprecate
    //     console.log('componentWillReceiveProps (deprecated)');
    // }


    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        console.log('3. render');
        return (
            <div>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}


export default LifeCycle;
