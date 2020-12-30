import { ACTION_TYPES } from "../actions/dCandidate";

const initalState = {
  list: [],
};

export const dCandidate = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    default:
      return state;
  }
};
