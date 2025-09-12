import React, { Component } from "react";
import './App.css'

export default class AppClass extends Component {
  state = {
    count: 0,
  };

  render() {
    const decrementHandler = () => {
      this.setState({ count: this.state.count - 1 });
    };
    const incrementHandler = () => {
        this.setState({ count: this.state.count + 1 });
      };
      const resetHandler = () => {
        this.setState({ count: 0 });
      };
    return (
      <div className="container">
        <div>
          <h1>Count: {this.state.count}</h1>
        </div>
        <div className="button-container">
          <button onClick={decrementHandler}>{"<<"}</button>
          <button onClick={resetHandler}> {"Reset"}</button>
          <button onClick={incrementHandler}> {">>"}</button>
        </div>
      </div>
    );
  }
}
