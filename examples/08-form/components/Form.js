import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: '',
    team: ''
  }

   //onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있습니다. 
  handleChange = (e) => { 
    console.log('dd');
    console.log(document.getElementById('test').value);   
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();   // 페이지 리로딩 방지
    this.props.onCreate(this.state);    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.setState({   // 상태 초기화
      name: '',
      team: ''
    })
  }

  // 사실 JSX에 쓰인 input을 비롯한 HTML에서 볼 수 있는 태그들은 모두 React에 정의된 컴포넌트들이다. 
  // 그리고 코드에서 브라우저의 DOM을 조작하는 것 같지만, 실제로는 React 런타임 내부에 있는 Virtual DOM을 조작한다. 

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}  //onChange 는 input 의 텍스트 값이 바뀔때마다 발생하는 이벤트입니다. 
          name="name"
          id='test'
        />
        <input
          placeholder="소속"
          value={this.state.team}
          onChange={this.handleChange}
          name="team"
        />
        <button type="submit">등록</button>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        이름 : {this.state.name}
        <br/>
        소속 : {this.state.team}
      </form>
    );
  }
}

export default Form;