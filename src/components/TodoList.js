import React, { Component } from 'react';
import ListItem from './ListItem'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      todo:''
    }
  }
  render() {
    console.log('TodoList render')
    const list = 
        this.props.todoList.map(
            (value,i)=>{
                let color;
                if(i%2===0){
                    color = 'gray'
                }else{
                    color ='red'
                }
                return <ListItem todo={value} 
                    color={color}/>
            }
        )
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default TodoList;
