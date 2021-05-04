import { CHECK_AUTH } from "./types";

export const InitialState = {
  checkAuth: false,
};

export function Reducer(state, action) {
  switch (action.type) {
    case CHECK_AUTH:
      return {
        ...state,
        checkAuth: action.payload,
      };
    default:
      return state;
  }
}
