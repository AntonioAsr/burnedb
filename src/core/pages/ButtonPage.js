import React from "react";
import { COLORS } from "../constants";
import { Button } from "../components/Button";
import Text from "../components/Text";

const ButtonPage = () => {
    return (
        <>
            <Button status="active">
                <Text fontType="h3SemiBold" color={COLORS.active}>Active Button</Text>
            </Button>
            <Button status="inactive">
                <Text fontType="h3SemiBold" color={COLORS.active}>Active Button</Text>
            </Button>
        </>
    );
};
export default ButtonPage;