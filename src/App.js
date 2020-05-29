import "./core/stylesheets/App.scss";
import React from "react";
import FontPage from "./core/pages/FontPage";
import HomePage from "./core/pages/HomePage";
import InputPage from "./core/pages/InputPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/HomePage">HomePage</Link>
                    </li>
                    <li>
                        <Link to="/FontPage">FontPage</Link>
                    </li>
                    <li>
                        <Link to="/InputPage">InputPage</Link>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/HomePage">
                    <HomePage />
                </Route>
                <Route path="/FontPage">
                    <FontPage />
                </Route>
                <Route path="/InputPage">
                    <InputPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
