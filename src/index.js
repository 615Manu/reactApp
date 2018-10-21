import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import Items from "./component/items";
import { itemReducer } from "./reducer/itemReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(itemReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
