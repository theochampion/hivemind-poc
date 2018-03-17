import { TOGGLE_LOG } from "../constants/ActionTypes";

const initialState = {
  isLogged: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOG:
      return {
        ...state,
        isLogged: !state.isLogged
      };

    default:
      return state;
  }
}
