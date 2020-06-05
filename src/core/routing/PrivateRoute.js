import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";


const PrivateRoute = ({ children, rest, isLoggedIn }) => {
    isLoggedIn = useSelector(state => state.user.isLoggedIn);
    // debugger;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.element,
    isLoggedIn: PropTypes.bool
};

export default PrivateRoute;