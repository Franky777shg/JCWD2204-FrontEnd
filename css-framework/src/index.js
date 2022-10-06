import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// setup chakra UI
import { ChakraProvider } from "@chakra-ui/react";

// setup redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);
