import React from "react";
import Text from "../components/Text.js";
import { FONTS, COLORS } from "../constants.js";
import { Container, Row, Col } from "react-grid-system";
// import { WithHeaderTemplate } from "DLPcomponents/withHeaderTemplate.js";

const typographyTypes = {
    active: COLORS.primary,
    inactive: COLORS.inactive,
    white: COLORS.white,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    tertiary: COLORS.tertiary
};

export default function FontPage() {
    const allFonts = Object.keys(FONTS);
    const typographyColors = Object.keys(typographyTypes);
    return (
        <div style={{ width: "100%", height: "100%", marginBottom: "50px" }}>
            {/* <WithHeaderTemplate> */}
            <Container>
                <Row>
                    {
                        typographyColors.map((textType, index) => {
                            return (
                                <Col key={index} xs={12} sm={6} md={3} style={{ marginTop: "30px" }}>
                                    {
                                        allFonts.map((font, index) => {
                                            const color = COLORS[textType];
                                            return (
                                                <div key={index} style={{ alignItems: "center" }}>
                                                    <Text fontType={`${font}`} color={color}>{`${font.toUpperCase()} ${font}`}</Text>
                                                </div>
                                            );
                                        })
                                    }
                                </Col>
                            );
                        })
                    }
                </Row>
                <Text fontType={"bodyXSmallRegular"} color={COLORS.alert}>Body x-small regular</Text>
            </Container>
            {/* </WithHeaderTemplate> */}
        </div>
    );
}