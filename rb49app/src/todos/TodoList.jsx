import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoList = () => {
  var [todos, setTodos] = useState([
    { title: "Stuttgart", id: uuidv4(), status: false },
    { title: "Cologne", id: uuidv4(), status: false },
    { title: "Bremen", id: uuidv4(), status: false },
    { title: "Dresden", id: uuidv4(), status: false },
    { title: "Munich", id: uuidv4(), status: false },
    { title: "Berlin", id: uuidv4(), status: false },
  ]);

  function deleteTodo(id) {
    setTodos((cv) => {
      return cv.filter((todo) => {
        if (todo.id === id) {
          return false;
        } else {
          return true;
        }
      });
    });
  }

  function addTodo() {
    let newTodo = {
      title: document.getElementById("d1").value,
      id: uuidv4(),
      status: false,
    };
    setTodos((cv) => {
      return [...cv, newTodo];
    });
  }

  function toggleTodo(id) {
    setTodos((cv) => {
      var x = cv.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      });
      return [...x];
    });
  }
  return (
    <div className="border border-3 border-info m-2 p-2">
      <h1>Todo List</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Todo
      </button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <Todo
              t={todo}
              i={i}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            ></Todo>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
