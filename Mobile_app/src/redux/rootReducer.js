import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import vitalsReducer from "./vitals/vitals.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  vitals: vitalsReducer,
});

export default rootReducer;
