import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { NavigationBar } from "./_components/Nav";
import { Login } from "./pages/Login";
import { DashBoard } from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavigationBar />
            <Register />
          </Route>
          <Route exact path="/login">
            <NavigationBar />
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <DashBoard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
