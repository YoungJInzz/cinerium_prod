import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./style/reset.css";
import "./style/style1.css";
import "./style/style2.css";
import "./style/signup.css";
import "./font/font.css";
import rootReducer, { rootSaga } from "./modules";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import "react-app-polyfill/ie9";
import { BrowserRouter } from "react-router-dom";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, ReduxThunk))
);
sagaMiddleware.run(rootSaga);
console.log(store.getState());
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
