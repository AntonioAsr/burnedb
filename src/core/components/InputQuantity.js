import React from "react";
import PropTypes from "prop-types";
import Text from "../components/Text";
import { COLORS } from "../constants";

import { IncreaseQuantityActiveButton, DecreaseQuantityInactive, DecreaseQuantityActive } from "../components/QuantityButtons";

const InputQuantity = ({ quantity, increaseQuantity, decreaseQuantity }) => {
    quantity = 0;
    return (
        <div style={{ display: "inline-flex", alignItems: "center" }}>
            {
                quantity === 0 ? (
                    <DecreaseQuantityInactive onClick={decreaseQuantity}></DecreaseQuantityInactive>
                ) : (
                    <DecreaseQuantityActive></DecreaseQuantityActive>
                )
            }
            <Text fontType="h1" color={COLORS.active}>
                {quantity}
            </Text>
            <IncreaseQuantityActiveButton onClick={increaseQuantity}></IncreaseQuantityActiveButton>
        </div>
    );
};

InputQuantity.propTypes = {
    quantity: PropTypes.number,
    increaseQuantity: PropTypes.func,
    decreaseQuantity: PropTypes.func
};

export default InputQuantity;