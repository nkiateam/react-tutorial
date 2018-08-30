import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch, history } from 'react-router-dom';
// import { hashHistory  } from 'react-router';

import { Home, About, Posts } from './views';

class App extends Component {

    render() {
        return (
            <div>
                <Link to="/home">go home</Link><br />           
                <Link to="/about">go about</Link><br/>
                <Link to="/about/testParameter">go about Parameter</Link>
                <li><Link to="/posts">Posts</Link></li>

                <button onClick={()=>{history.push('/home')}}>버튼</button>
                
                <Route path="/home" component={Home} />
                <Switch>    
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));