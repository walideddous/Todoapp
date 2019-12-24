import React, { Component }  from 'react';
import { addnewitem } from '../actions'
import { connect } from 'react-redux';
import './TodoList.css';

const mapDispatchToProps = (dispatch) =>{
  return {
    addnewitem: items => dispatch(addnewitem(items))
  }
}

class connectedTodoList extends Component {
  state = {
    input: ""
  }
  addItem =(e) =>{
    const { input } = this.state;
    e.preventDefault()
    if (input){
      this.props.addnewitem({ 
        text : this.state.input,
        key : Date.now(),
        button : true,
        edit : false})
      this.setState({input:""})
    }
}

  handlechange = (e)=>{
    const {value}=e.target;
    this.setState({input : value})
  }

  render() { 
    return ( 
      <form onSubmit={this.addItem}>
      <input
        onChange={this.handlechange}
        placeholder="enter tasks"
        value = {this.state.input}
      ></input>
      <button type="submit">Add</button>
    </form>
     );
  }
}

const TodoList = connect(null,mapDispatchToProps)(connectedTodoList)

export default TodoList
