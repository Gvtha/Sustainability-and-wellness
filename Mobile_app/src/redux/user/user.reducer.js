import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };

    case userActionTypes.LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };

    case userActionTypes.SET_ERROR:
      return {
        ...state,
        currentUser: null,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
