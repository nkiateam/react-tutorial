import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LifeCycle from './components/LifeCycle';

class Main extends Component {

    render() {
        return (
            	<LifeCycle/>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
