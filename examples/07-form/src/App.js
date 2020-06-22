import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert('나의 이름은 ' + this.state.value);
    event.preventDefault();  // 페이지 리로딩 방지
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" vlaue="Submit" />
      </form>
      
    )
  }
}

export default App;
