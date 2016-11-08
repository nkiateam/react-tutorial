var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    clickHandler: function(url, event) {
        this.props.onClick(event, url);
    },
    render: function() {
        var repoClick = this.clickHandler.bind(this, '/repos');
        return (
            <div>
                <h1>App isolation</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos - Link</Link></li>
                    <li><Link to="/repos1">Repos1 - Link</Link></li>
                    <li onClick={repoClick}>Repos</li>
                    <li onClick={this.clickHandler.bind(this, "/repos1")}>Repos1</li>
                </ul>

                {this.props.children}
            </div>
        );
    }
});