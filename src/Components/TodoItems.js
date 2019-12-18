import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import "./TodoItems.css";


class TodoItems extends Component {
    constructor(props){
        super(props);   
    }

    createTasks = (item) => <li className={item.button ? "couleurrouge": "couleurancienne"} onClick={()=>this.changeColor(item.key)} onDoubleClick={()=>this.delete(item.key)} key={item.key}>{item.text}</li>
    
    changeColor = (key) => this.props.changeColor(key);

    delete = (key) => this.props.delete(key);

    render () {
        return (
            <ul className="theList">
            <FlipMove duration={250} easing="ease-out">{this.props.entries.map(this.createTasks)}</FlipMove>
            </ul>
        );
    }
}

export default TodoItems;