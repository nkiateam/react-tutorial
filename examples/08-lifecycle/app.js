import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './src/App';

class Main extends Component {

    render() {
        return (
            <App />
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
