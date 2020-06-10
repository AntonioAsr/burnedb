import "./core/stylesheets/App.scss";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./core/routing/PrivateRoute.js";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

import FontPage from "./core/pages/FontPage";
import CreateAccountPage from "./core/pages/CreateAccountPage";
import InputPage from "./core/pages/InputPage";
import ButtonPage from "./core/pages/ButtonPage";
import LoginPage from "./core/pages/LoginPage";
import MainPage from "./core/pages/MainPage";
import ResetPasswordModal from "./core/components/ResetPasswordModal";
import store from "./core/data/combineReducers";

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
                        <MainPage/>
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

