import React, { Component } from 'react';

const Promblematic = () => {
    throw (new Error('버그 발생...!'));  // Error가 발생하면 자동으로 componentDidCatch 로 이동
};

class Error extends Component {

    state = {
        number: 0,
        error: false
    }

    componentDidCatch(error, info) {       
        this.setState({
            error: true
        });
    }
    
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

    handleReset = () => {
        this.setState({
            number: 0,
            error: false,
        });
    }

    render() {
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
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}


export default Error;
