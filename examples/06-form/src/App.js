import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    this.input = React.createRef();
  }

  // handleChange = (event) => {
  //   this.setState({
  //     value: event.target.value
  //   });
  // }

  handleSubmit = (event) => {
    // alert('나의 이름은 ' + this.state.value); // 제어 컴포넌트에서 데이터 가져오기
    alert('나의 이름은 ' + this.input.current.value); // 비제어 컴포넌트에서 데이터 가져오기
    event.preventDefault();  // 페이지 리로딩 방지
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input
            type="text"
            // value={this.state.value}
            // onChange={this.handleChange}
            ref={this.input}
          />
        </label>
        <input type="submit" vlaue="Submit" />
      </form>
      
    )
  }
}

export default App;
