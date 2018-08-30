import React, { Component } from 'react';

const Promblematic = () => {
    throw (new Error('버그 발생...!'));  // Error가 발생하면 자동으로 componentDidCatch 로 이동
    return (
      <div/>
    );
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

    render() {
        if(this.state.error) return (<h1>에러 발생...!</h1>);
        return (
            <div>
                <div>값: {this.state.number}</div>
                { this.state.number === 4 && <Promblematic /> }
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}


export default Error;
