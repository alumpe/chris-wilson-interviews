import React from "react";
import StylesProvider from "../styles/StylesProvider";
import App from "./App";

const Root = () => (
  <React.StrictMode>
    <StylesProvider>
      <App />
    </StylesProvider>
  </React.StrictMode>
);

export default Root;
