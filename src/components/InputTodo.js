import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props){
    super(props)
    this.state={
      todo:''
    }
  }
  render() {
    console.log('InputTodo render')
    let style = {backgroundColor: this.props.color}
    return (
      <div style= {style}>
          <input type="text" value={this.state.todo} onChange={
            e=>this.setState({
              todo:e.target.value
            })
          }/>
          <button onClick={
            ()=>this.props.addTodo(this.state.todo)
          }>123</button>
      </div>
    );
  }
}

export default InputTodo;
