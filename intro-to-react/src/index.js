import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContohClassComp from "./classComp";

// setup react router dom
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing/routing";

// prop practice
import Parent from "./ContohProp/parent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
