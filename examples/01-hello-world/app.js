// 파일 및 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention 입니다.
import React, { Component } from 'react'; // import JavaScript ES6 에 새로 도입된 키워드로서, require('..') 의 역할을 합니다.
import ReactDOM from 'react-dom';

class Main extends Component {
    render() {
        return (
            <div>
                Hello world
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));