import React, { useState } from "react";
import { COLORS } from "../constants";
import { Container, Row, Col } from "react-bootstrap";
import InputField from "../components/InputField";
import Text from "../components/Text";

export default function InputPage() {


    /* eslint-disable */
    const [ text, setInputValue ] = useState([]);
    /* eslint-enable */

    // TODO: implement placeholder styles for different browsers -check if style component fixed this
    return (
        <>
            {/* <WithHeaderTemplate> */}
            <Container>
                <Row>
                    <Col sm={12} md={3} lg={3} style={{ marginTop: "30px" }}>
                        <InputField
                            placeholder="A place holder"
                            id="input"
                            labelText="Lorem Ipsum"
                            setInputValue={setInputValue}
                            style={{ marginTop: "35px" }}
                        />
                        <Text fontType={"h1"} color={COLORS.active}>Mobile small</Text>
                        <InputField
                            id="input"
                            hasFocus={false}
                            labelText="Lorem Ipsum"
                            setInputValue={setInputValue}
                            placeholder="Active"
                            style={{ marginTop: "35px" }}
                        />
                        <InputField
                            hasFocus={false}
                            labelText="itsMe"
                            setInputValue={setInputValue}
                            placeholder="Inactive"
                            style={{ marginTop: "35px" }}
                        />
                        <InputField
                            id="input3"
                            hasFocus={false}
                            labelText="Lorem Ipsum"
                            setInputValue={setInputValue}
                            placeholder="Email Address"
                            style={{ marginTop: "35px" }}
                        />
                    </Col>
                    <Col sm={12} md={6} lg={6} style={{ marginTop: "30px" }}>
                        <Text fontType={"h1"} color={COLORS.active}>Landing Page</Text>
                        <InputField
                            id="input4"
                            hasFocus={false}
                            labelText="Lorem Ipsum"
                            setInputValue={setInputValue}
                            placeholder="placeholder"
                            style={{ marginTop: "35px" }}
                        />
                        <InputField
                            id="input"
                            hasFocus={false}
                            labelText="Lorem Ipsum"
                            setInputValue={setInputValue}
                            placeholder="User Name"
                            style={{ marginTop: "35px" }}
                        />
                    </Col>
                    <Col sm={12} md={7} lg={7} style={{ marginTop: "30px" }}>
                        <Text fontType={"h1"} color={COLORS.active}>Medium modals</Text>
                        <InputField
                            id="input34"
                            hasFocus={false}
                            labelText="Error"
                            setInputValue={setInputValue}
                            style={{ marginTop: "35px" }}
                            placeholder="Error logic to be done"
                            errorText="Error logic to be done with spefic validation"
                        />
                    </Col>
                    <Col sm={12} md={12} lg={12} style={{ marginTop: "30px", marginBottom: "30px" }}>
                        <Text fontType={"h1"} color={COLORS.active}>Large xl screen</Text>
                        <InputField
                            id="inp34ut"
                            hasFocus={false}
                            labelText="Lorem Ipsum"
                            setInputValue={setInputValue}
                            style={{ marginTop: "35px" }}
                            placeholder="Count"
                            maxLength={11}
                        />
                    </Col>
                </Row>
            </Container>
            {/* </WithHeaderTemplate> */}
        </>
    );
}