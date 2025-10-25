import React, { useState } from "react";

function Counter({ step, children, a }) {
  var [count, setCount] = useState(+children);

  function incr() {
    setCount((pv) => {
      return pv + step;
    });
  }

  function decr() {
    setCount((pv) => {
      return pv - step;
    });
  }
  return (
    <div className="border border-5 m-3 p-2 border-info">
      <h1>Counter: {count}</h1>
      <button onClick={() => incr()} className="btn btn-success me-2">
        Increment
      </button>
      <button onClick={() => decr()} className="btn btn-warning me-2">
        Decrement
      </button>
      <button onClick={() => a()}>Child</button>
    </div>
  );
}

export default Counter;
