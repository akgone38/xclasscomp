import React, { Component } from 'react';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
    }
  }
  increaseCount= ()=>{
    this.setState(prevState=>({
      count:prevState.count+1
    }));
  };
  decreaseCount= ()=>{
    this.setState(prevState=>({
      count:prevState.count-1
    }));
  };
  render() {
    const { count } = this.state;

    return (
      <div className="card">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={this.increaseCount}>Increment</button>
        <button onClick={this.decreaseCount}>Decrement</button>
      </div>
    );
  }
}


export default App
