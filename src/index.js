import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { AppContainer } from "./containers/AppContainer";
import * as serviceWorker from "./serviceWorker";
import hljs from "highlight.js";
import "./index.scss";
import "./dracula.css";

export const PUBLIC_URL = process.env.PUBLIC_URL;

export const updateCodeSyntaxHighlighting = () => {
  document.querySelectorAll("pre code").forEach(block => {
    hljs.highlightBlock(block);
  });
};


const store = createStore(rootReducer, applyMiddleware(thunk));
// TODO: Remove. For debugging purposes only!
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
