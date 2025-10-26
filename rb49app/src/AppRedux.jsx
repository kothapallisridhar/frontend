import React from "react";
import Counter from "./store/Counter";
import Todolist from "./store/Todolist";

function AppRedux() {
  return (
    <div className="border border-5 p-3 m-2 border-success">
      <h1>This is App</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default AppRedux;
