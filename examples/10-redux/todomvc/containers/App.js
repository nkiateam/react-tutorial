import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

// 액션 생성자들을 actions 객체로 부름
import * as TodoActions from '../actions';

class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}


// store 안의 state 값을 props 로 연결 : 상태 연결
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/

const  mapDispatchToProps = (dispatch) => { // 액션함수 연결
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

/*
    5. Connect 메소드를 이용해 App 컴포넌트와 Store 연결
    react-redux의 connect 함수
    이 함수의 파라미터로 컴포넌트에 연결시킬 상태와, 액션함수들을 전달해주면
    컴포넌트를 리덕스 스토어에 연결시키는 또 다른 함수를 반환합니다.

    이 과정에서 리턴된 함수 안에, 프리젠테이셔널 컴포넌트를 파라미터로 전달해주면
    리덕스 스토어에 연결된 컴포넌트가 새로 만들어집니다.

    상태를 연결시키는 함수 mapStateToProps 와 액션함수를 연결시키는 함수 mapDispatchToProps를
    connect에 전달해주고, 그렇게 전달받은 함수에 App 컴포넌트를 전달하여 이를 내보냅니다.
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
