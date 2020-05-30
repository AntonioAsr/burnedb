import React, { useState } from "react";
import InputField from "../components/InputField";
import Text from "../components/Text.js";
import Burntbutter from "../components/Burntbutter.js";
import { COLORS } from "../constants";
import { Container, Row, Col } from "react-bootstrap";
import createUser from "../data/services/createUser";

const HomePage = () => {

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
                <Col>
                    <form>
                        <Burntbutter />
                        <Text fontType="bodyRegular" color={COLORS.active} style={{ marginTop: "12px" }}>Create your account</Text>
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
                        <button
                            onClick={handleSubmit}
                            style={{ width: "100%", height: "54px", backgroundColor: COLORS.dTertiaryVariant1, marginTop: "31px", textAlign: "center" }}
                        >
                            <Text fontType="bodyRegular" color={COLORS.white}>Create your account</Text>
                        </button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;