import React from "react";
//import Counter from "./store/Counter";
import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";
//import Todolist from "./store/Todolist";

function AppRedux() {
  return (
    <div className="border border-5 p-3 m-2 border-success">
      <h1>This is App</h1>
      {/* <Counter></Counter> */}
      <Counter></Counter>
      {/* <Todolist></Todolist> */}
      <Todolist></Todolist>
    </div>
  );
}

export default AppRedux;
