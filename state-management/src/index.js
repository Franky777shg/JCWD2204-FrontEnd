import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Comp1 } from "./Comp1";

// setup redux toolkit
import { store } from "./reducer/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
