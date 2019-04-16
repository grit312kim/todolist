import React, { Component } from 'react';

class InputTodo extends Component {
  render() {
    return (
      <div>
          {this.props.color}
          <input type="text"/>
          <button>123</button>
      </div>
    );
  }
}

export default InputTodo;
