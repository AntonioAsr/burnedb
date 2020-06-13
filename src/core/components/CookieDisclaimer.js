import styled, { css } from "styled-components";
import { COLORS } from "../constants";
import React from "react";
// import mediaQueries from "./mediaQueries";
import Text from "../components/Text";
import { ButtonSecondary } from "../components/Button";
import XCloseButtonWhite from "./XCloseButtonWhite";
const CookieDisclaimerWrapper = styled.div`
    /* width: 100%;
    top: 0; */
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    background-color: ${COLORS.active};
    height: 67px;
    /* margin: auto; */

`;

const CookieDisclaimer = () => {
    return (
        <CookieDisclaimerWrapper>
            <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "space-between" }}>
                <Text fontType="bodyXSmallRegular" color={COLORS.white} style={{ marginLeft: "18px" }}>
                    We use cookies to make your online experience easier and better. By navigating the site, you agree to the use of cookies to collect information on Burnt Butter.
                </Text>
                <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
                    <ButtonSecondary>
                        Learn More
                    </ButtonSecondary>
                    <XCloseButtonWhite />
                </div>
            </div>
        </CookieDisclaimerWrapper>
    );
};

export default CookieDisclaimer;