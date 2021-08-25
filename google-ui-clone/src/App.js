import React from "react";
import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>

          <Switch>
            <Route path="/search">
            <h1>Google Search Engine</h1>
            </Route>
            <Route path="/">
              {/*Home (the one with the search component)*/}
              <Home />
            </Route>
          </Switch>
        </Router>
      {/* Search results page */}
    </div>
  );
}

export default App;
