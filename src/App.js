import React from "react";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/edit/:1" component={Edit} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
