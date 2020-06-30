import React from 'react';
import Error from './components/Error'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>숫자가 4면 에러발생</h1>
        <h1>숫자가 3이면 렌더 안함</h1>
        <Error/>
      </div>
    )
  }
}

export default App;
