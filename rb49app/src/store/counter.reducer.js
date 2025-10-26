const initialState = {
  count: 0,
};
export function counterReducer(state = initialState, action) {
  // logic
  if (action.type === "INC") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "DEC") {
    return { state, count: state.count - 1 };
  }
  return state;
}
