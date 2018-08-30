import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {

	onClick = (e) => {
			console.log('onClick');
			console.log(e);
	}

	onDoubleClick = (e) => {
		console.log('onDoubleClick');
		console.log(e);
	}

	onContextMenu = (e) => {
		console.log('onContextMenu');
		console.log(e);
	}

	onMouseDown = (e) => {
		console.log('onMouseDown');
		console.log(e);
	}

	onMouseUp = (e) => {
		console.log('onMouseUp');
		console.log(e);
	}

	onChange = (e) => {
		console.log('onChange');
		console.log(e);
	}

	onInput = (e) => {
		console.log('onInput');
		console.log(e);
	}

	onCopy = (e) => {
		console.log('onCopy');
		console.log(e);
		console.log(e.clipboardData);
	}

	onCut = (e) => {
		console.log('onCut');
		console.log(e);
		console.log(e.clipboardData);
	}

	onPaste = (e) => {
		console.log('onPaste');
		console.log(e);
		console.log(e.clipboardData.getData('text'));
	}

	render() {
		const { onClick, onDoubleClick, onContextMenu, onMouseDown, onMouseUp, onChange, onInput,
				onCopy, onCut, onPaste } = this;
        return (
            <div>
				<span style={{fontWeight: 'bold'}}>Form Events</span><br/>
            	<button onClick={onClick}>onClick</button>{'\u00A0'}
            	<button onDoubleClick={onDoubleClick}>onDoubleClick</button>{'\u00A0'}
            	<button onContextMenu={onContextMenu}>onContextMenu</button>{'\u00A0'}
				<button onMouseDown={onMouseDown}>onMouseDown</button>{'\u00A0'}
				<button onMouseUp={onMouseUp}>onMouseUp</button>{'\u00A0'}
				<br/><br/>

				<span style={{fontWeight: 'bold'}}>Form Events</span><br/>
				<input type="text" onChange={onChange} onInput={onInput} />{'\u00A0'}
				<select onChange={onChange}>
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>{'\u00A0'}
				<input type="checkbox" onChange={this.onChange} />
				<br/><br/>

				
				<span style={{fontWeight: 'bold'}}>Clipboard Events</span><br/>
				<div onCopy={onCopy} onCut={onCut}>text</div>
				<div>
					<textarea style={{border: '1px solid', width: '300px', height: '100px'}}
						placeholder="여기에 붙여넣기를 하세요" onPaste={onPaste}/>
				</div>				
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
