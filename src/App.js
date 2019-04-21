import React, { Component } from 'react';
import './App.css';
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      inputColor:'yellow',
      todoList:[]
    }
  }
  setInputColor(color){
    this.setState({
      inputColor:color      
    })
  }
  addTodo(todo){
    this.setState({
      todoList:this.state.todoList.concat(todo)
    })
  }
  render() {
    console.log("App render")
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
        <InputTodo
          color={this.state.inputColor}
          addTodo={this.addTodo.bind(this)}
          />
        <TodoList
          todoList={this.state.todoList}
          color={this.state.inputColor}/>
      </div>
    );
  }
}

export default App;
