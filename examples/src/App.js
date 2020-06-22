import React from 'react';

// 클래스 컴포넌트
/*
class App extends React.Component {
  render() {
    return (
      <div>
        <h2>클래스 컴포넌트</h2>
        <b>Hello {this.props.name}</b>
      </div>
    )
  }
}
*/


/*
function App(props) {
  return (
    <div>
      <h2>함수형 컴포넌트</h2>
      <b>Hello {props.name}</b>
    </div>  
  );
}
*/

const App = (props) => {
  return (
    <div>
      <h2>화살표 함수를 사용한 함수형 컴포넌트</h2>
      <b>Hello {props.name}</b>
    </div>
  )
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
