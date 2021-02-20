import React from "react";

import { Provider } from "react-redux";

import store from "./src/redux/store/store";

import Application from "./src/Application";

const App = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

export default App;
