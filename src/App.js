import "./core/stylesheets/App.scss";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./core/routing/PrivateRoute.js";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import store from "./core/data/combineReducers";

// import throttle from "lodash/throttle";


import FontPage from "./core/pages/FontPage";
import CreateAccountPage from "./core/pages/CreateAccountPage";
import InputPage from "./core/pages/InputPage";
import ButtonPage from "./core/pages/ButtonPage";
import LoginPage from "./core/pages/LoginPage";
import ResetPasswordModal from "./core/components/ResetPasswordModal";

export const appHistory = createBrowserHistory();
function App() {
    return (
        <Provider store={store}>
            <Router history={appHistory}>
                <Switch>
                    <Route path="/login">
                        <LoginPage history={appHistory} />
                    </Route>
                    <PrivateRoute path="/" exact>
                        <div>burned butter</div>
                    </PrivateRoute>
                    <Route path="/createAccount">
                        <CreateAccountPage />
                    </Route>
                    <Route path="/fontPage">
                        <FontPage />
                    </Route>
                    <Route path="/inputPage">
                        <InputPage />
                    </Route>
                    <Route path="/buttonPage">
                        <ButtonPage />
                    </Route>
                </Switch>
                <ResetPasswordModal/>
            </Router>
        </Provider>
    );
}


export default App;
