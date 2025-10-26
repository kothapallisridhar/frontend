const initialState = {
  todos: ["get house", "pay school fee", "go to Munich"],
};

export function todoReducer(state = initialState, action) {
  if (action.type === "ADD_TODO") {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  return state;
}
