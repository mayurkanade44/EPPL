import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App";
import { DataProvider } from "./context/data_context";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
