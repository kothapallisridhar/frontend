import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "./counterSlice";

function Counter() {
  var { count } = useSelector((state) => state.counterR);
  var dispatch = useDispatch();

  return (
    <div className="border border-3 border-info m-2">
      <h1>Counter:{count}</h1>
      <button className="btn btn-info m-2" onClick={() => dispatch(inc())}>
        Increment
      </button>
      <button className="btn btn-warning m-2" onClick={() => dispatch(dec())}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
