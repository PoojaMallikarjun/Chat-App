import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Dashboard from "./dashboard/Dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB9QgzJBypPudZr6Sac2KUBoKElMxpej10",
  authDomain: "chat-application-e20c8.firebaseapp.com",
  databaseURL: "https://chat-application-e20c8.firebaseio.com",
  projectId: "chat-application-e20c8",
  storageBucket: "chat-application-e20c8.appspot.com",
  messagingSenderId: "490579104850",
  appId: "1:490579104850:web:c5b22a554551f5f847fb8b",
  measurementId: "G-DFQH7ZK38Q",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
