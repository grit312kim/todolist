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
    let style = {backgroundColor: this.props.color}
    const list = 
        this.props.todoList.map(
            (value,i)=>{
                console.log('value : ' + value + ' i : ' + i)
                let color = this.props.color;
                if(i%2===0){
                    color = 'gray'
                }
                return <ListItem todo={value} key={i}
                    color={color}/>
            }
        )
    return (
      <div style= {style}>
        {list}
      </div>
    );
  }
}

export default TodoList;
