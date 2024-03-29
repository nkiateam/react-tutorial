import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) { // enter를 누른경우
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  // handleBlur = (e) => {
  //   if (!this.props.newTodo) {
  //     console.log('handleBlur')
  //     this.props.onSave(e.target.value);
  //   }
  // }

  render() {
    return (
      <input 
        className={classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                  })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        // onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}



export default TodoTextInput;
