import React from "react";
import { connect } from "react-redux";
import CreateRecipeHeader from "../components/CreateRecipeHeader";
import XCloseButtonBlack from "../components/XCloseButtonBlack";
import { COLORS } from "../constants";
import Text from "../components/Text";
import { ButtonSmallOutlined } from "../components/Button";
import { ButtonSmallFilled } from "../components/Button";
import DescriptionBlock from "../components/DescriptionBlock";
import { Container } from "react-grid-system";
import InputField from "../components/InputField";
import TimeBox from "../components/TimeBox";
import TextArea from "../components/TextArea";
import DropDownButton from "../components/DropDownButton";
import CreateNewListSection from "../components/CreateNewListSection";
import { DotArea } from "../components/DragAndDropPicture";
import camera from "../images/camera1.png";
import cameraHover from "../images/cameraHover.png";


import {
    IncreaseQuantityActiveButton,
    DecreaseQuantityInactive,
    DecreaseQuantityActive
} from "../components/QuantityButtons";

class RecipeDraft extends React.Component {

    constructor() {
        super();
        this.state = {
            recipeTitle: "",
            quantity: 0,
            src: camera,
            numberOfLists: 0
        };
    }
    static propTypes = {
        dispatch: () => { }
    }

    changeSource = () => {
        this.setState({
            src: cameraHover
        });
        if (this.state.src === cameraHover) {
            this.setState({
                src: camera
            });
        }
    }

    decreaseQuantity = (event) => {
        event.preventDefault();
        if (this.state.quantity) {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    }

    increaseQuantity = (event) => {
        event.preventDefault();
        this.setState({
            quantity: this.state.quantity + 1
        });
    }

    setRecipeTitle = (e) => {
        this.setState({
            recipeTitle: e.target.value
        });
    }

    increaseNumberOfLists = () => {
        if (this.state.numberOfLists < 2) {
            this.setState({
                numberOfLists: this.state.numberOfLists + 1
            });
        }
    }


    render() {
        // const { countOwnerRecipes, username } = this.props;
        return (
            <>
                <CreateRecipeHeader>
                    {/* grid is causes problems in mobile */}
                    <div style={{ alignItems: "center", width: "100%", display: "grid", gridTemplateColumns: "100px auto 200px" }}>
                        <div style={{ marginLeft: "28px" }}>
                            <XCloseButtonBlack style={{ height: "18px", width: "18px" }} />
                        </div>
                        <Text fontType="hero" color={COLORS.active}>{`recipe.title`}(Draft)</Text>
                        <div style={{ display: "flex" }}>
                            {/*chnage color and background colro dependin gon status */}
                            <ButtonSmallOutlined style={{ marginRight: "20px" }}>
                                <Text fontType="h5SemiBold" style={{ color: COLORS.inactive }}>
                                    Post Recipe
                                </Text>
                            </ButtonSmallOutlined>

                            <ButtonSmallFilled backgroundColor={COLORS.dTertiaryVariant1} style={{ marginRight: "29px" }}>
                                <Text fontType="h5SemiBold" color={COLORS.white} >
                                    Save as draft
                                </Text>
                            </ButtonSmallFilled>
                        </div>
                    </div>
                </CreateRecipeHeader>
                <Container style={{ maxWidth: "996px" }}>
                    <DescriptionBlock style={{ marginTop: "14px" }}>
                        <Text fontType="h3SemiBold" color={COLORS.active}>HOW IT WORKS</Text>
                        <Text fontType="bodyRegular" color={COLORS.active}>
                            Add as little as a ‘Title’ to save your recipe as a draft and finish it later. You can find all your drafted recipes in your profile page, by’ clicking on the ‘Drafts’ tab. When all the fields marked with an asterisk are completed your recipe is ready to be posted for other users to try, like, rate and share!
                        </Text>
                    </DescriptionBlock>
                    <Text fontType="h1" color={COLORS.active} style={{ marginTop: "14px" }}>
                        * Add a photo
                    </Text>

                    <DotArea onMouseEnter={this.changeSource} onMouseLeave={this.changeSource}>
                        <img src={this.state.src} alt="The current outlet" style={{ height: "112px", width: "347px", objectFit: "cover" }} />
                    </DotArea>
                    <Text fontType="h1" color={COLORS.active} style={{ marginTop: "18px" }}>
                        * Title
                    </Text>
                    <div style={{ marginTop: "14px" }}>
                        <form action="">
                            <InputField
                                hasFocus={false}
                                setInputValue={this.setRecipeTitle}
                                placeholder="Write your recipe title here"
                                maxLength={80}
                                style={{ marginTop: "10px" }}
                            />
                            <Text fontType="h1" color={COLORS.active} style={{ marginTop: "18px" }}>
                                Description and tags
                            </Text>
                            <InputField
                                hasFocus={false}
                                setInputValue={this.setRecipeTitle}
                                placeholder="This recipe is an instant classic. My family has been cooking it for generations. Enjoy. #main #familyrecipe #pasta"
                                style={{ marginTop: "10px" }}
                            // inputStyles={{ height: "99px" }}
                            />
                            {/* add diners quantity input and change to space between */}

                            <div style={{ display: "inline-flex", alignItems: "center", width: "100%", flexWrap: "wrap", justifyContent: "space-between" }}>
                                <div style={{ display: "inline-flex", height: "100%", alignItems: "center", marginTop: "64px" }}>
                                    <input checked={true} type="radio" id="male" name="serves" value="serves" style={{ width: "30px", height: "30px" }} />
                                    <label htmlFor="serves" id="servesLabel" style={{ marginLeft: "20px" }}>
                                        <Text fontType="h1" color={COLORS.active}>Serves</Text>
                                    </label>
                                    <input type="radio" id="male" name="serves" value="serves" style={{ width: "40px", height: "30px", marginLeft: "20px" }} />
                                    <label htmlFor="serves" id="servesLabel" style={{ marginLeft: "20px" }}>
                                        <Text fontType="h1" color={COLORS.active}>Makes</Text>
                                    </label>
                                </div>

                                <div style={{ display: "inline-flex", flexWrap: "wrap", marginTop: "64px" }}>
                                    <div style={{ display: "inline-flex", alignItems: "center" }}>
                                        {
                                            this.state.quantity === 0 ? (
                                                <DecreaseQuantityInactive onClick={this.decreaseQuantity}></DecreaseQuantityInactive>
                                            ) : (
                                                <DecreaseQuantityActive onClick={this.decreaseQuantity}></DecreaseQuantityActive>
                                            )
                                        }
                                        <Text fontType="h1" style={{ marginLeft: "47px", minWidth: "40px", display: "flex", justifyContent: "center" }} color={COLORS.active}>
                                            {this.state.quantity}
                                        </Text>
                                        <IncreaseQuantityActiveButton onClick={this.increaseQuantity} style={{ marginLeft: "47px" }}></IncreaseQuantityActiveButton>
                                    </div>
                                </div>
                            </div>


                            {/* Time boxes section */}
                            <div style={{ display: "flex", height: "100%", alignItems: "center", marginTop: "64px", flexWrap: "wrap" }}>
                                <Text fontType="h1" color={COLORS.active}>* Cooking Time</Text>
                                <TimeBox inputStyles={{ marginLeft: "20px", width: "60px", height: "60px" }} labelText="Days" />
                                <TimeBox inputStyles={{ marginLeft: "20px", width: "60px", height: "60px" }} labelText="Hours" />
                                <TimeBox inputStyles={{ marginLeft: "20px", width: "60px", height: "60px" }} labelText="Minutes" />
                            </div>

                            <Text fontType="h1" color={COLORS.active} style={{ marginTop: "80px" }}>* Main ingredients list </Text>
                            <DescriptionBlock style={{ marginTop: "14px" }}>
                                <Text fontType="h3SemiBold" color={COLORS.active}>
                                    Popular abreviations
                                </Text>
                                <Text fontType="bodyRegular" style={{ marginTop: "11px" }} color={COLORS.active}>
                                    tsp (teaspoon); tbsp (tablespoon); cup; pt (pint); l (litre); dl (decilitre); ml (milliliter); lb (pound); oz (ounce); fl oz (fluid ounce); g (gram); Kg (kilogram);
                                </Text>
                            </DescriptionBlock>
                            {/* The behaviour on the duplicate list should be the easiest one to implement
                                check if values for each list is filled then allow
                            */}
                            <CreateNewListSection>
                                <div style={{ display: "inline-flex " }}>
                                    <Text fontType="h2Bold" color={COLORS.active}>
                                        Need more than one ingredient list?
                                    </Text>
                                    <Text fontType="bodyRegular" color={COLORS.active}>
                                        You can create up to three ingredient list.
                                    </Text>
                                </div>
                                <Text fontType="bodyRegular" color={COLORS.active}>
                                    E.g. For the pastry, For the dipping sauce etc.
                                </Text>
                            </CreateNewListSection>
                            <TextArea
                                placeholder="150 g flour
2 eggs
1 ½ tsp baking powder" style={{ marginTop: "20px", marginBottom: "40px" }}></TextArea>

                            <Text fontType="h1" color={COLORS.active} style={{ marginTop: "80px" }}>* Method</Text>
                            <DescriptionBlock style={{ marginTop: "14px" }}>
                                <Text fontType="h3SemiBold" color={COLORS.active}>
                                    Type or copy and paste your recipe steps
                                </Text>
                                <Text fontType="bodyRegular" color={COLORS.active} style={{ marginTop: "11px" }}>
                                    Separate each step with an empty line.
                                </Text>
                            </DescriptionBlock>

                            <TextArea
                                placeholder="Pre-heat the oven to 180°C &#13;&#10;Peel and finely chopped the onions."
                                style={{ marginTop: "20px", marginBottom: "40px" }} />
                        </form>
                        <DropDownButton></DropDownButton>
                    </div>
                </Container>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};

const mapStateToProps = (state) => {
    return {
        userId: state.user.userId,
        username: state.user.userDetails.username,
        countOwnerRecipes: state.user.userDetails.countOwnerRecipes
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDraft);
