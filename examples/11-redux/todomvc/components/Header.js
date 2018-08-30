import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  
  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
          <h1>Redux Application2</h1>
          <TodoTextInput newTodo onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    );
  }
}


export default Header;
