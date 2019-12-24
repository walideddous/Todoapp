import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import TodoItems from './Components/TodoItems';
import './App.css';


class App extends Component {
  
//   state = { items : [], input:"",}

// addinput = (input) =>{
//   this.setState({input : input })
// }

// addItem =(e) =>{
//       if (this.state.input){
//         var newItem ={
//             text : this.state.input,
//             key : Date.now(),
//             button : true
//         };
//         this.setState ((prevState) => {
//             return {
//             items: prevState.items.concat(newItem),input:""
//             }
//         });
//       }
//     e.preventDefault()
//  console.log(this.state.items,'ede')
// }

// deleteitem = ( key ) => {
//  this.setState({ items : this.state.items.filter( item => {return (item.key!== key)})});
// }

// changeColor = ( key ) => {
//  this.setState({ items : this.state.items.map(el => el.key===key ? {...el,button:false}:el)});
// }
  render() { 
    return (
      <div className="App">
        <div className="todoListMain">
          <div className="header">
            <TodoList
              // addItem={this.addItem}
              // input={a => this.addinput(a)}
              // inpute={this.state.input}
            />
            <TodoItems
              // entries={this.state.items}
              // changeColor={this.changeColor}
              // remove={this.deleteitem}
            />
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
