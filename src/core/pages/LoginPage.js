import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import Text from "../components/Text.js";
import Burntbutter from "../components/Burntbutter.js";
import { COLORS } from "../constants";
import { Container, Row, Col, Visible } from "react-grid-system";
import { Button } from "../components/Button";
import { StyledForm } from "../components/StyledForm";
import logInUser from "../data/services/loginUser";
import SolidBorderContainer from "../components/SolidBorderContainer";
import { Link } from "react-router-dom";
import mobileBanner from "../images/mobileBanner/mobileBanner.png";
import appStoreLogo from "../images/appStoreLogo.png";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { SHOW_RESET_PASSWORD } from "../data/actions/modalActions";
import validateEmail from "../utils";
const LoginPage = (props) => {
    const [ email, setUserEmail ] = useState("");
    const [ password, setUserPassword ] = useState("");
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = {
            "email": email,
            "password": password
        };
        logInUser(formData);
    };

    useEffect(() => {
        if (isLoggedIn) {
            props.history.push("/");
        }
    });

    return (
        <Container style={{ height: "100%" }}>
            <Row>
                <Visible xl>
                    <Col xl={5} style={{ marginTop: "72px" }}>
                        <img src={mobileBanner} alt="Spinner" style={{ width: "auto", objectFit: "contain", maxWidth: "590px" }} />
                    </Col>
                    <Col xl={2}></Col>
                </Visible>
                <Col xs={12} xl={5} style={{ marginTop: "123px" }}>
                    <StyledForm style={{ maxWidth: "486px" }}>
                        <SolidBorderContainer>
                            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <Burntbutter />
                            </div>
                            <Text color={COLORS.active} fontType="h3SemiBold" style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>Login to your account</Text>
                            <InputField
                                id="email"
                                hasFocus={false}
                                setInputValue={setUserEmail}
                                placeholder="Email"
                                style={{ marginTop: "28px", width: "100%" }}
                            />
                            <InputField
                                id="password"
                                type="password"
                                hasFocus={false}
                                setInputValue={setUserPassword}
                                placeholder="Password"
                                style={{ marginTop: "28px", width: "100%" }}
                            />
                            <Button
                                onClick={handleSubmit}
                                style={{ width: "100%", height: "54px", backgroundColor: COLORS.dTertiaryVariant1, marginTop: "31px", textAlign: "center" }}
                            >
                                <Text fontType="bodyRegular" color={COLORS.white}>Login</Text>
                            </Button>
                            <div
                                role="button"
                                tabIndex={0}
                                onKeyDown={(() => dispatch({ type: SHOW_RESET_PASSWORD }))}
                                onClick={() => dispatch({ type: SHOW_RESET_PASSWORD })}
                                style={{ display: "flex", justifyContent: "center", marginTop: "12px", cursor: "pointer" }}>
                                <Text fontType="bodySmallRegular" color={COLORS.secondary}>
                                    Forgot your password?
                                </Text>
                            </div>
                        </SolidBorderContainer>
                        {/* TODO: turn next div into a component */}
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "38px" }}>
                            <Text color={COLORS.active} fontType="bodySmallRegular" style={{ display: "flex", justifyContent: "center", marginRight: "5px" }}>Don&apos;t have an account?</Text>
                            <Link to={{ pathname: "/createAccount" }}>
                                <Text fontType="bodySmallRegular" color={COLORS.secondary}>
                                    Sign Up
                                </Text>
                            </Link>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "26px" }}>
                            <img src={appStoreLogo} alt="Spinner" style={{ objectFit: "contain", maxWidth: "590px", width: "125px", height: "42px"  }} />
                        </div>
                        {/* can be a styled componetn to reuse in create acc */}
                        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "26px" }}>
                            <Link to={{ pathname: "/createAccount" }}>
                                <Text fontType="bodySmallRegular" color={COLORS.secondary}>
                                   Terms
                                </Text>
                            </Link>
                            <Link to={{ pathname: "/createAccount" }}>
                                <Text fontType="bodySmallRegular" color={COLORS.secondary}>
                                    Privacy
                                </Text>
                            </Link>
                            <Link to={{ pathname: "/createAccount" }}>
                                <Text fontType="bodySmallRegular" color={COLORS.secondary}>
                                   Contact
                                </Text>
                            </Link>
                            <Text fontType="h5SemiBold" color={COLORS.active}>
                                ©2020 BURNT BUTTER
                            </Text>
                        </div>
                    </StyledForm>
                </Col>
            </Row>
        </Container>
    );
};

LoginPage.propTypes = {
    history: PropTypes.object
};
export default LoginPage;