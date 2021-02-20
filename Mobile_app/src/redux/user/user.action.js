import userActionTypes from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: userActionTypes.LOGOUT_USER,
});

export const setErrorMessage = (error) => ({
  type: userActionTypes.SET_ERROR,
  payload: error,
});

export const loginStart = (emailAndPassword) => ({
  type: userActionTypes.LOGIN_START,
  payload: emailAndPassword,
});

export const loginSuccess = (user) => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: userActionTypes.LOGIN_FAILURE,
  payload: error,
});
