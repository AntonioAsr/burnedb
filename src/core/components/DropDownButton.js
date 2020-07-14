import React from  "react";
import { COLORS } from "../constants";
import Text from "../components/Text";
import PropTypes from "prop-types";

const DropDownButton = ({ categories, selectedCategory, selectCategory }) => {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    return (
        <div className="dropdown" style={{ border: `1px solid ${COLORS.inactive}` }}>
            <button onClick={myFunction} className="dropbtn">
                {
                    selectedCategory ? (
                        <Text fontType="h2Semibold" color={COLORS.active}>
                            {selectedCategory}
                        </Text>
                    ) : (
                        <Text fontType="h2Semibold" color={COLORS.active}>
                            Categories
                        </Text>
                    )
                }
            </button>
            <div id="myDropdown" className="dropdown-content" style={{ width: "249px" }}>
                {
                    categories.map((category, key) => {
                        return (
                            <button key={key} onClick={selectCategory} className="dropbtn" style={{ textAlign: "left", margin: "0px", padding: "0px" }}>
                                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                                    <a id={category.name} data-value={category.id} href={category.name}>
                                        {category.name}
                                    </a>
                                </Text>
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
};
DropDownButton.propTypes = {
    categories: PropTypes.array,
    selectedCategory: PropTypes.string,
    selectCategory: PropTypes.func
};
export default DropDownButton;
