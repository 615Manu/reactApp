const intialState = {
  items: [
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]
};

export const itemReducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        items: [...state.items]
        //items: action.paylod
      };
    case "DECREMENT":
      console.log("state is", ...state.items);
      return {
        ...state,
        items: action.payload
        //items: action.paylod
      };
    case "RESET":
      console.log("state is", ...state.items);
      return {
        ...state,
        items: [...state.items]
        //items: action.paylod
      };
    default:
      return state;
  }
};
