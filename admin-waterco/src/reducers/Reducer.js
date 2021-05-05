import 
{ CHECK_AUTH, 
  UPDATE_CURRENT_USER,
} from "./types";

export const InitialState = {
  checkAuth: false,
  currentUser: [],
};

export function Reducer(state, action) {
  switch (action.type) {
    case CHECK_AUTH:
      return {
        ...state,
        checkAuth: action.payload,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state;
  }
}
