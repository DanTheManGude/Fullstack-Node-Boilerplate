import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./css/index.css";
import * as serviceWorker from "./serviceWorker";
import { firebaseConfig } from "./firebaseConfig.js";
require("firebase/auth");
export var firebase = require("firebase/app");

firebase.initializeApp(firebaseConfig);

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
  console.log("Rendered the Application");
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
