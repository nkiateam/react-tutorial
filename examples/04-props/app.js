import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Props from './components/Props';

class Main extends Component {

	state = {
		name: '버튼',
		index: 0,
		disabled: false
	};

	onChangeIndex = () => {
		let index = this.state.index;
		if (index < 10) {
			this.setState({index: ++index});
		} else {
			this.setState({index: 0});
		}
	}

	onChangeButtonLabel = () => {
		if(this.state.name === '버튼') {
			this.setState({name: 'Submit'});
		}else {
			this.setState({name: '버튼'});
		}
	}

	onChangeDisabled = () => {
		let disabled = !this.state.disabled;
		this.setState({disabled: disabled});
	}

    render() {
        return (
            <div>
            	<h2>Props</h2><br/>
            	<Props name={this.state.name} index={this.state.index} disabled={this.state.disabled} />
            	<br/>
            	<button onClick={this.onChangeIndex}>Index 변경</button>{'\u00A0'}
            	<button onClick={this.onChangeButtonLabel}>Button Label 변경</button>{'\u00A0'}
            	<button onClick={this.onChangeDisabled}>Enable/Disabled</button>
            	<br/>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));