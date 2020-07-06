import React from  "react";
import { COLORS } from "../constants";
import Text from "../components/Text";

const DropDownButton = () => {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    return (
        <div className="dropdown" style={{ border: `1px solid ${COLORS.inactive}` }}>

            <button onClick={myFunction} className="dropbtn">
                <Text fontType="h2Semibold" color={COLORS.active}>
                    Categories
                </Text>
            </button>
            <div id="myDropdown" className="dropdown-content" style={{ width: "249px" }}>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Starter">
                        Starter
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Main">
                    Main
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Breakfast">
                    Dessert
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Breakfast">
                    Snacks
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Breakfast">
                    Breakfast
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Breakfast">
                    Brunch
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Breakfast">
                    Baking
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Breakfast">
                    Condiments and sauces
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Breakfast">
                    Sides
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Breakfast">
                    Preserves
                    </a>
                </Text>
                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                    <a href="#Breakfast">
                    Drinks
                    </a>
                </Text>
            </div>
        </div>
    );
};
export default DropDownButton;
