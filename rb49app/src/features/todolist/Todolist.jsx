import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo, deleteTodo } from "./todolistSlice";

function Todolist() {
  var { todos } = useSelector((state) => state.todolistR);
  var [newTodo, setNewTodo] = useState("");
  var dispatch = useDispatch();
  return (
    <div className="border border-3 border-info m-2">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        className="btn btn-info m-2"
        onClick={() => {
          dispatch(addTodo(newTodo));
        }}
      >
        Add New Todo
      </button>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
