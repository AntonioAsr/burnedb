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
import EditProfileModal from "./core/components/EditProfileModal";
import store from "./core/data/combineReducers";
import CookieDisclaimer from "./core/components/CookieDisclaimer";
import CreateRecipePage from "./core/pages/CreateRecipePage";
import EditDraft from "./core/pages/EditDraft";
export const appHistory = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <Router history={appHistory}>
                {/* <CookieDisclaimer /> */}
                <Switch>
                    <Route path="/login">
                        <LoginPage history={appHistory} />
                    </Route>
                    <PrivateRoute path="/" exact>
                        <MainPage />
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
                    <Route path="/createRecipe">
                        <CreateRecipePage />
                    </Route>
                    <Route path="/editDraft">
                        <EditDraft />
                    </Route>
                </Switch>
                <ResetPasswordModal />
                <EditProfileModal />
            </Router>
        </Provider>
    );
}

export default App;

