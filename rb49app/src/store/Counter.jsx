import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log("Counter component::", props);
  return (
    <div className="border border-5 p-3 m-2 border-primary">
      <h1>Counter: {props.count}</h1>
    </div>
  );
}

export default connect((store) => {
  return store.counterReducer;
})(Counter);
