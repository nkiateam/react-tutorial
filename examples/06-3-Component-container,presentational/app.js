import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 프레젠테이셔널 컴포넌트
const PresentationalComponent = (props) => {
    console.log('FunctionalComponent')
    return (
        <section>
            <h2>Container Component vs. Presentational Component</h2>
            <div>
                <div>
                    <div>
                        <button type='button' onClick={props.increaseCounter}>Increment</button>
                        <button type='button' onClick={props.decreaseCounter}>Decrement</button>
                    </div>
                </div>
                <div>
                        {
                            `counter : ${props.counter}`
                        }
                    </div>
            </div>
        </section>
    );
}

// 컨테이너 컴포넌트
class ContainerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    decreaseCounter = () => {
        this.setState({
            counter: this.state.counter - 1,
        })
    }

    render() {
        return (
            <section>
                <PresentationalComponent
                    increaseCounter={this.increaseCounter}
                    decreaseCounter={this.decreaseCounter}
                    counter={this.state.counter}
                />
            </section>
        );
    }
}

ReactDOM.render(<ContainerComponent />, document.getElementById('app'));