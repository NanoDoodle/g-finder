import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/css/animate.css";
import Navbar from "./components/layout/Navbar";
import Trending from "./components/pages/Trending";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "bootstrap/dist/js/bootstrap.js";

import "./styles/css/bootstrap.css";
import "./styles/css/styles.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/trending" component={Trending} />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
