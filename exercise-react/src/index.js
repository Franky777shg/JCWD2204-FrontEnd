import React from "react";
import ReactDOM from "react-dom/client";
import Stopwatch from "./stopwatch";
import Filtering from "./filtering";
import { Navigation } from "./chat/navigation";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Navigation />
    </ChakraProvider>
  </BrowserRouter>
);
