// Form
'use strict';

var React = require('react');
var ReactDom = require('react-dom');

var Main = React.createClass({
    getInitialState: function() {
        return {value: 'Hello!', areaValue: 'Teatarea Hello!'};
    },
    onChange: function(event) {
        this.setState({value: event.target.value});
    },
    onAreaChange: function(event) {
        this.setState({areaValue: event.target.value});
    },
    render: function() {
        return (
            <div>
                <span style={{fontWeight: 'bold'}}>Input text</span>
                <br/>
                <input type="text" value="abc"  />{'\u00A0'}
                <input type="text" />{'\u00A0'}
                <input type="text" value={this.state.value} onChange={this.onChange} />{'\u00A0'}
                <input type="text" defaultValue="Hello!" />
                <br/><br/>
                <span style={{fontWeight: 'bold'}}>Textarea</span>
                <br/>
                {/*<textarea name="description">This is the description.</textarea>*/}
                <textarea value="abc" readOnly />{'\u00A0'}
                <textarea />{'\u00A0'}
                <textarea value={this.state.areaValue} onChange={this.onAreaChange} />{'\u00A0'}
                <textarea defaultValue="This is a description." />
            </div>
        )
    }
});

ReactDom.render(<Main />, document.getElementById('app'));
