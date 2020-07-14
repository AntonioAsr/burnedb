import React from  "react";
import { COLORS } from "../constants";
import Text from "../components/Text";

const DropDownButton = ({ categories }) => {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    console.log(categories, "reciviod")
    return (
        <div className="dropdown" style={{ border: `1px solid ${COLORS.inactive}` }}>
            <button onClick={myFunction} className="dropbtn">
                <Text fontType="h2Semibold" color={COLORS.active}>
                    Categories
                </Text>
            </button>
            <div id="myDropdown" className="dropdown-content" style={{ width: "249px" }}>
                {
                    categories.map((category, key) => {
                        return (
                            <button key={key} onClick={myFunction} className="dropbtn" style={{ textAlign: "left", margin: "0px", padding: "0px" }}>
                                <Text className="textHover" fontType="h2Semibold" color={COLORS.active}>
                                    <a href="#Main">
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
export default DropDownButton;
