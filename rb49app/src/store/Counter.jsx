import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log("Counter component::", props);
  return (
    <div className="border border-5 p-3 m-2 border-primary">
      <h1>Counter: {props.count}</h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          props.dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-warning m-2"
        onClick={() => {
          props.dispatch({ type: "DEC" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default connect((store) => {
  return store.counterReducer;
})(Counter);
