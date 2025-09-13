import React, { useState } from "react";
import "./App.css"

export const App = () => {
  const [count, setCount] = useState(0);

  const decrementHandler = () => {
    setCount(count - 1);
  };
  const incrementHandler = () => {
    setCount(count + 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <div>
        <h1>Count: {count}</h1>
      </div>
      <div className="button-container">
        <button onClick={decrementHandler}>{"<<"}</button>
        <button onClick={resetHandler}> {"Reset"}</button>
        <button onClick={incrementHandler}> {">>"}</button>
      </div>
    </div>
  );
};

export default App;
