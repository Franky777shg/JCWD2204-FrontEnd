import React from "react";
import ReactDOM from "react-dom/client";
import Stopwatch from "./stopwatch";
import Filtering from "./filtering";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Filtering />
  </ChakraProvider>
);
