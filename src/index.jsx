import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import App from "./App";
import GlobalStyles from "./components/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("this is index.js");
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
);
