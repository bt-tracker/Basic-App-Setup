import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./reducers";

const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
