import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login/login";
import Signup from "./signup/signup";
import Dashboard from "./dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyD_ST6ieO1jUJkD8ifqGXybdEZLkgYHwnA",
  authDomain: "react-chat-app-ae5eb.firebaseapp.com",
  databaseURL: "https://react-chat-app-ae5eb.firebaseio.com",
  projectId: "react-chat-app-ae5eb",
  storageBucket: "react-chat-app-ae5eb.appspot.com",
  messagingSenderId: "564341132269",
  appId: "1:564341132269:web:7a38dfc6a4808c69dcf5e4",
  measurementId: "G-XEGZWV6R1R",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
