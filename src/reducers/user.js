import { TOGGLE_LOG } from "../constants/ActionTypes";

const initialState = {
  isLogged: false
};

export default function users(state = initialState, action) {
  console.log("initialState", state);
  switch (action.type) {
    case TOGGLE_LOG:
      console.log("reduced");
      return {
        ...state,
        isLogged: !state.isLogged
      };

    default:
      return state;
  }
}
