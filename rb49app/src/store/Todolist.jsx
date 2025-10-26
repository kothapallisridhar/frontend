import React from "react";
import { connect } from "react-redux";

function Todolist(props) {
  console.log("Todolist component::", props);
  return (
    <div className="border border-5 p-3 m-2 border-info">
      <h1>Todolist</h1>
      <ul>
        {props.todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect((store) => {
  return store.todoReducer;
})(Todolist);
