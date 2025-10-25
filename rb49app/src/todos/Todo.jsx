import React from "react";
import "../todos/Todo.css";

const Todo = (props) => {
  return (
    <div>
      <li className="border p-2 m-2 border-primary">
        <span style={props.t.status ? { textDecoration: "line-through" } : {}}>
          {props.t.title}
        </span>
        <button
          className={props.t.status ? "btn btn-info" : "btn btn-success"}
          onClick={() => {
            props.toggleTodo(props.t.id);
          }}
        >
          {props.t.status ? "Undo" : "Done"}
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={() => {
            props.deleteTodo(props.t.id);
          }}
        >
          Delete
        </button>
      </li>{" "}
    </div>
  );
};

export default Todo;
