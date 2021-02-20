import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "./user.types";

import { loginStart, loginSuccess, loginFailure } from "./user.action";

export function* login({ payload: { email, password } }) {}

export function* onLoginStart() {
  yield takeLatest(userActionTypes.LOGIN_START, login);
}
