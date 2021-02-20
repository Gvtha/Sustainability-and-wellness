import vitalActionTypes from "./vitals.types";

const initialState = {
  vitalsData: null,
  isFetching: true,
};

const vitalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case vitalActionTypes.SET_VITALS:
      return {
        ...state,
        isFetching: false,
        vitalsData: action.payload,
      };
    default:
      return state;
  }
};

export default vitalsReducer;
