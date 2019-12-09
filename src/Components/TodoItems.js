import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props){
        super(props);

        this.state = {
            bgColor: ""
        };
        
        this.createTasks=this.createTasks.bind(this);
        this.delete=this.delete.bind(this);
        this.changecolor=this.changecolor.bind(this);
    }

    changecolor = (e) => {
        this.setState({
            bgColor: "red"
        });
    }

    createTasks = (item) => <li onClick={this.changecolor} onDoubleClick={()=>this.delete(item.key)} key={item.key}>{item.text}</li>;
    delete = (key) =>  this.props.delete(key);
    
    
    render () {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
            <FlipMove duration={250} easing="ease-out">{listItems}</FlipMove>
            </ul>
        );
    }
}

export default TodoItems;