import React from 'react';

const Promblematic = () => {
    throw (new Error('버그 발생...!'));  // Error가 발생하면 자동으로 componentDidCatch 로 이동
};

class Error extends React.Component {
    constructor(props) {
        console.log('1. constructor');
        super(props);
    
        this.state = {
          number: 0,
          isUpdate: false,
          error: false,
        };
    }

    componentDidCatch(error, info) {
        console.log('에러 발생!! : componentDidCatch');
        this.setState({
            error: true,
        });
    }

    static getDerivedStateFromProps(nextProps, preveState) {
        // props로 받아온 값을 state로 동기화하는 작업을 할 때 사용
        const { isUpdate } = preveState;
        const order = isUpdate === true ? 1 : 2;
        console.log(`${order}.. getDerivedStateFromProps`);
        return null;
    }
    
    componentDidMount() {
        console.log('4. componentDidMount');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // 성능을 최적화하고 불필요한 업데이트가 일어나지 않도록 함
        // 3의 배수라면 리렌더링 하지 않는다.
        if (nextState.number % 3 === 0) {
            console.log('2. shouldComponentUpdate 3의 배수');
            return false;
        }
        console.log('2. shouldComponentUpdate');
        return true;
    }
    
    getSnapshotBeforeUpdate(preveProps, preveState, snapshot) {
        console.log('4. getSnapshotBeforeUpdate');
        return null;
    }
      
    componentDidUpdate(preveProps, preveState, snapshot) {
        // 이 함수 안에서 setState 사용시 무한루프에 빠지므로 주의
        console.log('5. componentDidUpdate');
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleIncrese = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1,
            isUpdate: true,
        });
    }

    handleDecrease = () => {
        const { number } = this.state;
            this.setState({
            number: number - 1,
            isUpdate: true,
        });
    }

    handleReset = () => {
        this.setState({
            number: 0,
            error: false,
        });
    }

    render() {
        console.log('3. render');
        const { error, number } = this.state;
        if (error) return (
            <React.Fragment>
                <h1>에러 발생...!</h1>
                <button onClick={this.handleReset}>Reset</button>
            </React.Fragment>
        )

        return (
            <div>
                <div>값: {number}</div>
                { number === 4 && <Promblematic /> }
                <button onClick={this.handleIncrese}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Error;