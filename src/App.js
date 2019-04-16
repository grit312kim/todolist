import React, { Component } from 'react';
import './App.css';
import InputTodo from './components/InputTodo'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      inputColor:''
    }
  }
  setInputColor(color){
    this.setState({
      inputColor:color
    })
  }
  render() {
    return (
      <div className="App">
        <div className="Todo-body">
          <button onClick={
            ()=>this.setInputColor('yellow')
          } >노란색</button>
          <button onClick={
            ()=>this.setInputColor('green')
          } >초록색</button>
          <button onClick={
            ()=>this.setInputColor('red')
          } >빨간색</button>
        </div>
        <InputTodo color={this.state.inputColor}/>
      </div>
    );
  }
}

export default App;
