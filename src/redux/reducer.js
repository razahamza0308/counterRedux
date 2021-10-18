const initialState = {
  counter: 0,
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "COUNTER_INCREASE":
      state.counter = state.counter + 1;
      return { ...state }
    case "COUNTER_DECREASE":
      state.counter = state.counter - 1;
      return { ...state }
    default:
      return state;
  }
}