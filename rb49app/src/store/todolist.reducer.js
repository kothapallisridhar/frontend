import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { title: "get house", id: uuidv4(), status: false },
    { title: "pay school fee", id: uuidv4(), status: false },
    { title: "go to Munich", id: uuidv4(), status: true },
    { title: "make an AI app", id: uuidv4(), status: true },
  ],
};

export function todoReducer(state = initialState, action) {
  if (action.type === "ADD_TODO") {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  if (action.type === "DELETE_TODO") {
    let temp = state.todos.filter((todo) => todo.id !== action.payload);
    return { ...state, todos: [...temp] };
  }
  if (action.type === "TOGGLE_STATUS") {
    let temp = state.todos.map((todo) => {
      if (todo.id === action.payload) {
        todo.status = !todo.status;
      }
      return todo;
    });
    return { ...state, todos: [...temp] };
  }
  return state;
}
