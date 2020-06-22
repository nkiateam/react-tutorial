import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Error from './components/Error';

class Main extends Component {
    render() {
        return (
            <div><h1>숫자가 4이상이면 에러발생</h1><Error/></div>
            
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));