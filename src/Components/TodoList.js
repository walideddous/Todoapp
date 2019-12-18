import React , { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoLIst extends Component {
    constructor(props){
        super(props);

        this.state ={
            items : []
        };
    }

    addItem =(e) =>{
        if (this._inputElement.value!==""){
            var newItem ={
                text : this._inputElement.value,
                key : Date.now(),
                button : true
            };
            this.setState ((prevState) => {
                return {
                items: prevState.items.concat(newItem)
            };
            });
        }
        this._inputElement.value="";

        e.preventDefault();
    }

 deleteitem = ( key) => {
     this.setState({ items : this.state.items.filter( item => {return (item.key!== key)})});
 }

 changeColor = (key ) => {
     this.setState({ items : this.state.items.map(el => el.key===key ? {...el,button:false}:el)});
 }
    render () {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a)=> this._inputElement = a} placeholder="enter tasks"></input>
                        <button type="submit">Add</button>
                    </form>
                    <TodoItems entries={this.state.items} changeColor={this.changeColor} delete={this.deleteitem} />
                </div>
            </div>
        );
        
    }
}

export default TodoLIst;