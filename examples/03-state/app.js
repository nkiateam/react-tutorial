import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import State from './components/State';

class Main extends Component {

    render() {
        return (
            <div>         	
            	<h2>State</h2><br/>
            	<State />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));