import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from './components/Form';

class Main extends Component {

    state = {
        information: [
          {
            name: '안형로',
            team: '연구1팀'
          }
        ]
      }

  handleCreate = (data) => {  // handleCreate 메소드를 만들고, 이를 form.js로 전달한다. 
                              //그리고 form.js로부터 submit이 발생하면 props로 받은 함수를 호출하여 app에서 파라미터로 받은값을 사용 할 수 있다.
    console.log(data);
    const { information } = this.state;
    this.setState({
        information: information.concat({ ...data })    // state에 form.js로부터 받은 information을 추가
    })
  }
  
  render() {
    const { information } = this.state;
    return (
      <div>
        <Form
          onCreate={this.handleCreate}/>
          {JSON.stringify(information)} 
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));