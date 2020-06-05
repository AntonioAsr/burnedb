import React, { useState } from "react";
import InputField from "../components/InputField";
import Text from "../components/Text.js";
import Burntbutter from "../components/Burntbutter.js";
import { COLORS } from "../constants";
import { Container, Row, Col, Visible } from "react-grid-system";
import { Button } from "../components/Button";
import createUser from "../data/services/createUser";
import SolidBorderContainer from "../components/SolidBorderContainer";
import { Link } from "react-router-dom";
import mobileBanner from "../images/mobileBanner/mobileBanner.png";

const CreateAccountPage = () => {

    const [ username, setUserName ] = useState("");
    const [ email, setUserEmail ] = useState("");
    const [ password, setUserPassword ] = useState("");
    const [ confirmedpassword, setConfirmPassword ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            "username": username,
            "email": email,
            "password": password,
            "confirmedpassword": confirmedpassword
        };
        createUser(formData);
    };

    return (
        <Container>
            <Row>
                <Visible xl>
                    <Col xl={5} style={{ marginTop: "72px" }}>
                        <img src={mobileBanner} alt="Spinner" style={{ width:"auto", objectFit: "contain", maxWidth: "590px" }}/>
                    </Col>
                    <Col xl={2}></Col>
                </Visible>
                <Col md={12} lg={12} xl={5} style={{ marginTop: "123px" }}>
                    <form>
                        <SolidBorderContainer>
                            <Burntbutter />
                            <Text color={COLORS.active} fontType="h3SemiBold" style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>Create your account</Text>
                            <InputField
                                id="userName"
                                hasFocus={false}
                                setInputValue={setUserName}
                                placeholder="User Name"
                                style={{ marginTop: "28px", width: "100%" }}
                            />
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
                            <InputField
                                id="confirmPassword"
                                type="password"
                                hasFocus={false}
                                setInputValue={setConfirmPassword}
                                placeholder="Confirm Password"
                                style={{ marginTop: "28px", width: "100%" }}
                            />
                            <Button
                                onClick={handleSubmit}
                                style={{ width: "100%", height: "54px", backgroundColor: COLORS.dTertiaryVariant1, marginTop: "31px", textAlign: "center" }}
                            >
                                <Text fontType="bodyRegular" color={COLORS.white}>Sign-Up</Text>
                            </Button>
                        </SolidBorderContainer>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                            <Text color={COLORS.active} fontType="bodySmallRegular" style={{ display: "flex", justifyContent: "center", marginRight: "5px" }}>Already have an account?</Text>
                            <Link to={{ pathname: "/login" }}>
                                <Text fontType="bodySmallRegular" color={COLORS.secondary}>
                                    Login
                                </Text>
                            </Link>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateAccountPage;