import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Todolist(props) {
  console.log("Todolist component::", props);
  var [newTodo, setNewTodo] = useState({});
  return (
    <div className="border border-5 p-3 m-2 border-info">
      <h1>Todolist</h1>
      <input
        type="text"
        id="d2"
        onChange={(e) =>
          setNewTodo({ title: e.target.value, id: uuidv4(), status: false })
        }
      />
      <button
        className="btn btn-info m-2"
        onClick={() => {
          props.dispatch({
            type: "ADD_TODO",
            payload: newTodo,
          });
          document.getElementById("d2").value = "";
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todos.map((todo, i) => {
          return (
            <li className={todo.status ? "text-decoration-line-through" : ""}>
              {todo.title}
              <button
                className={todo.status ? "btn btn-warning" : "btn btn-info"}
                onClick={() => {
                  props.dispatch({ type: "TOGGLE_STATUS", payload: todo.id });
                }}
              >
                {todo.status ? "Undo" : "Done"}
              </button>
              <button
                className="btn btn-warning m-2"
                onClick={() => {
                  props.dispatch({ type: "DELETE_TODO", payload: todo.id });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect((store) => {
  return store.todoReducer;
})(Todolist);
