import React from 'react';
import Error from './components/Error'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>숫자가 4 이상이면 에러발생</h1>
        <Error/>
      </div>
    )
  }
}

export default App;
