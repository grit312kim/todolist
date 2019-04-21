import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props){
    super(props)
    this.state={
      todo:''
    }
  }
  render() {
    console.log('ListItem render')
    let style = {backgroundColor: this.props.color}
    return (
      <div style= {style}>
        {this.props.todo}     
      </div>
    );
  }
}

export default ListItem;
