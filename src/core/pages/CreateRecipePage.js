import React from "react";
import { connect } from "react-redux";
import CreateRecipeHeader from "../components/CreateRecipeHeader";
import XCloseButtonBlack from "../components/XCloseButtonBlack";
import { COLORS } from "../constants";
import Text from "../components/Text";
import { ButtonSmallOutlined } from "../components/Button";
import { ButtonSmallFilled } from "../components/Button";
import { ButtonTertiary } from "../components/Button";
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
import cameraFocusCreateRecipe from "../images/cameraFocusCreateRecipe.png";
import addSecondarDisalbed from "../images/icons/addSecondarDisalbed.png";
import addTertiary from "../images/icons/addTertiary.png";
import removeItemBin from "../images/icons/removeItemBin.png";
import createRecipe from "../data/services/createRecipe";
import { useDropzone } from "react-dropzone";
import ReactDOM from 'react-dom';

import {
    IncreaseQuantityActiveButton,
    DecreaseQuantityInactive,
    DecreaseQuantityActive
} from "../components/QuantityButtons";

function Basic(props) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                {props.children}
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </section>
    );
}


class CreateRecipePage extends React.Component {

    constructor() {
        super();
        this.state = {
            recipeTitle: "",
            photoUrl: "www",
            quantity: 0,
            src: camera,
            numberOfLists: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            method: "",
            category: "Starter",
            ingredientList0: "",
            ingredientList1: "",
            showList1: false,
            showList2: false,
            descriptionAndTags: ""
        };
        this.inputRef = React.createRef();
    }

    static propTypes = {
        dispatch: () => { }
    }

    setDays = (value) => {
        this.setState({
            days: value
        });
    }


    setHours = (value) => {
        this.setState({
            hours: value
        });
    }

    setMinutes = (value) => {
        this.setState({
            minutes: value
        });
    }

    setMethod = (value) => {
        this.setState({
            method: value
        });
    }

    setDescriptionAndTags = (value) => {
        this.setState({
            descriptionAndTags: value
        });
    }

    handleBlur = () => {
        this.setState({
            src: camera
        });
    }

    setFocusState = () => {
        this.setState({
            src: cameraFocusCreateRecipe
        });
    }


    changeSource = () => {
        if (this.state.src === cameraFocusCreateRecipe) {
            return;
        } else {
            this.setState({
                src: cameraHover
            });
            if (this.state.src === cameraHover) {
                this.setState({
                    src: camera
                });
            }
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

    setRecipeTitle = (value) => {
        this.setState({
            recipeTitle: value
        });
    }

    increaseNumberOfLists = () => {
        if (this.state.numberOfLists < 2) {
            this.setState({
                numberOfLists: this.state.numberOfLists + 1
            });
        }
    }

    setMethod = (e) => {
        this.setState({
            method: e.target.value
        });
    }

    setRecipeList = (e) => {
        this.setState({
            ingredientList0: e.target.value
        });
    }

    setRecipeList1 = (e) => {
        this.setState({
            ingredientList1: e.target.value
        });
    }

    showList1 = (event) => {
        event.preventDefault();
        this.setState({
            showList1: true
        });
    }

    hideList1 = (event) => {
        event.preventDefault();
        this.setState({
            showList1: false
        });
    }

    showList2 = (event) => {
        event.preventDefault();
        this.setState({
            showList2: true
        });
    }

    hideList2 = (event) => {
        event.preventDefault();
        this.setState({
            showList2: false
        });
    }

    postRecipe = () => {
        // {
        //     "title": "string",
        //     "picture": "string",
        //     "description": "string",
        //     "stars": 0,
        //     "favourites": 0,
        //     "likes": 0,
        //     "hashtags": "string",
        //     "ingredientsStrings": "string",
        //     "serves": 1,
        //     "servesType": "Serves",
        //     "servesUM": "string",
        //     "draft": true,
        //     "date": "2020-07-02T11:54:06.473Z",
        //     "cookingTimeDays": 0,
        //     "cookingTimeHrs": 0,
        //     "cookingTimeMins": 0,
        //     "cookingTime": 5,
        //     "numOfRatings": 0,
        //     "ownerUsername": "string",
        //     "hidden": false,
        //     "banned": false,
        //     "suggestedDate": "2020-07-02T11:54:06.473Z",
        //     "flaggedDate": "2020-07-02T11:54:06.473Z",
        //     "featuredDate": "2020-07-02T11:54:06.473Z",
        //     "userId": 0,
        //     "categoryId": 0
        //   }
        createRecipe({
            title: this.state.recipeTitle,
            picture: this.state.photoUrl,
            description: this.state.descriptionAndTags,
            hashtags: "",
            ingredientsStrings: this.state.ingredientList0,
            serves: 2,
            servesType: "Serves",
            draft: false,
            cookingTimeDays: this.state.days,
            cookingTimeHrs: this.state.hours,
            cookingTimeMins: this.state.minutes,
            ownerUsername: this.props.username,
            userId: this.props.userId,
            categoryId: 2
        });
    }


    render() {

        const canPostRecipe =
            this.state.photoUrl &&
            this.state.recipeTitle &&
            this.state.days !== 0 &&
            this.state.hours !== 0 &&
            this.state.minutes !== 0 &&
            this.state.ingredientList0 &&
            this.state.method &&
            this.state.category;
        // const { countOwnerRecipes, username } = this.props;
        return (
            <>
                <CreateRecipeHeader>
                    {/* grid is causes problems in mobile */}
                    <div style={{ alignItems: "center", width: "100%", display: "grid", gridTemplateColumns: "100px auto 200px" }}>
                        <div style={{ marginLeft: "28px" }}>
                            <XCloseButtonBlack style={{ height: "18px", width: "18px" }} />
                        </div>
                        <Text fontType="hero" color={COLORS.active}>Create a recipe</Text>
                        <div style={{ display: "flex" }}>
                            {/*chnage color and background colro dependin gon status */}
                            <ButtonSmallOutlined onClick={this.postRecipe} style={{ marginRight: "20px" }}>
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

                    <div ref={this.inputRef} onFocus={this.setFocusState} onBlur={this.handleBlur}>
                        <Basic>
                            <DotArea onMouseEnter={this.changeSource} onMouseLeave={this.changeSource}>
                                <img src={this.state.src} alt="The current outlet" style={{ height: "112px", width: "347px", objectFit: "cover" }} />
                            </DotArea>
                        </Basic>
                    </div>

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
                                setInputValue={this.setDescriptionAndTags}
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
                                <TimeBox setInputValue={this.setDays} inputStyles={{ marginLeft: "20px", width: "60px", height: "60px" }} labelText="Days" />
                                <TimeBox setInputValue={this.setHours} inputStyles={{ marginLeft: "20px", width: "60px", height: "60px" }} labelText="Hours" />
                                <TimeBox setInputValue={this.setMinutes} inputStyles={{ marginLeft: "20px", width: "60px", height: "60px" }} labelText="Minutes" />
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

                            <TextArea
                                setInputValue={this.setRecipeList}
                                placeholder="150 g flour
2 eggs
1 ½ tsp baking powder" style={{ marginTop: "20px", marginBottom: "40px" }}></TextArea>



                            <CreateNewListSection>
                                <div style={{ display: "flex" }}>
                                    <Text fontType="h2Bold" color={this.state.ingredientList0 ? `${COLORS.active}` : `${COLORS.inactive}`}>
                                        Need more than one ingredient list?
                                    </Text>
                                    <Text fontType="bodyRegular" color={this.state.ingredientList0 ? `${COLORS.active}` : `${COLORS.inactive}`}>
                                        You can create up to 3 ingredients list.
                                    </Text>
                                </div>
                                <Text fontType="bodyRegular" color={this.state.ingredientList0 ? `${COLORS.active}` : `${COLORS.inactive}`}>
                                    E.g. For the pastry, For the dipping sauce etc.
                                </Text>
                                <ButtonTertiary
                                    onClick={this.showList1}
                                    enable={this.state.ingredientList0}
                                    style={{ marginTop: "17px", display: "flex", justifyContent: "center", alignItems: "center" }} border={this.state.ingredientList0 ? `${COLORS.tertiary}` : `${COLORS.inactive}`}
                                >
                                    <img src={this.state.ingredientList0 ? addTertiary : addSecondarDisalbed} alt="add recipe" style={{ objectFit: "contain", height: "21px", width: "21px", marginRight: "5px" }} />
                                    <Text style={{ textAlign: "center" }} fontType="h2Semibold" color={this.state.ingredientList0 ? `${COLORS.tertiary}` : `${COLORS.inactive}`}>
                                        Create a new list
                                    </Text>
                                </ButtonTertiary>
                                {/* New list 1 */}
                                {
                                    this.state.showList1 && (
                                        <CreateNewListSection>
                                            <Text fontType="h1" color={COLORS.active} style={{ marginTop: "20px" }}>New list name</Text>
                                            <InputField
                                                hasFocus={false}
                                                // setInputValue={setNewPassword}
                                                placeholder="I.e. For the dressing"
                                                maxLength={80}
                                                style={{ marginTop: "25px" }}
                                            />
                                            <Text fontType="h1" color={COLORS.active} style={{ marginTop: "20px" }}>Ingredients list</Text>

                                            <TextArea
                                                setInputValue={this.setMethod}
                                                placeholder="150 g flour&#13;&#10;
                                                2 eggs&#13;&#10;
                                                1 ½ tsp baking powder"
                                                style={{ marginTop: "20px", marginBottom: "40px" }}
                                            />
                                            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "31px" }}>
                                                <button onClick={this.hideList1} style={{ border: "none", background: "transparent", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                                    <img src={removeItemBin} alt="remove list" style={{ objectFit: "contain", height: "50px", width: "50px", marginRight: "5px" }} />
                                                    <Text fontType="h2Bold" color={COLORS.active}>
                                                        Remove new list
                                                    </Text>
                                                </button>
                                            </div>

                                            <div style={{ display: "flex" }}>
                                                <Text fontType="h2Bold" color={this.state.ingredientList1 ? `${COLORS.active}` : `${COLORS.inactive}`}>
                                                    Need more than one ingredient list?
                                                </Text>
                                                <Text fontType="bodyRegular" color={this.state.ingredientList1 ? `${COLORS.active}` : `${COLORS.inactive}`}>
                                                    You can create up to 3 ingredients list.
                                                </Text>
                                            </div>
                                            <Text fontType="bodyRegular" color={this.state.ingredientList1 ? `${COLORS.active}` : `${COLORS.inactive}`}>
                                                E.g. For the pastry, For the dipping sauce etc.
                                            </Text>
                                            <ButtonTertiary
                                                onClick={this.showList2}
                                                enable={this.state.ingredientList1}
                                                style={{ marginTop: "17px", display: "flex", justifyContent: "center", alignItems: "center" }} border={this.state.ingredientList1 ? `${COLORS.tertiary}` : `${COLORS.inactive}`}>
                                                <img src={this.state.ingredientList1 ? addTertiary : addSecondarDisalbed} alt="add recipe" style={{ objectFit: "contain", height: "21px", width: "21px", marginRight: "5px" }} />
                                                <Text style={{ textAlign: "center" }} fontType="h2Semibold" color={this.state.ingredientList1 ? `${COLORS.tertiary}` : `${COLORS.inactive}`}>
                                                    Create a new list
                                                </Text>
                                            </ButtonTertiary>
                                            {this.state.showList2 && (
                                                <>
                                                    <Text fontType="h1" color={COLORS.active} style={{ marginTop: "20px" }}>New list name</Text>
                                                    <InputField
                                                        hasFocus={false}
                                                        // setInputValue={setNewPassword}
                                                        placeholder="I.e. For the dressing"
                                                        maxLength={80}
                                                        style={{ marginTop: "25px" }}
                                                    />
                                                    <Text fontType="h1" color={COLORS.active} style={{ marginTop: "20px" }}>Ingredients list</Text>

                                                    <TextArea
                                                        setInputValue={this.setRecipeList1}
                                                        placeholder="150 g flour&#13;&#10;
                                                2 eggs&#13;&#10;
                                                1 ½ tsp baking powder"
                                                        style={{ marginTop: "20px", marginBottom: "40px" }}
                                                    />
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "31px" }}>
                                                        <button onClick={this.hideList2} style={{ border: "none", background: "transparent", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                                            <img src={removeItemBin} alt="remove list" style={{ objectFit: "contain", height: "50px", width: "50px", marginRight: "5px" }} />
                                                            <Text fontType="h2Bold" color={COLORS.active}>
                                                                Remove new list
                                                            </Text>
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                            }
                                        </CreateNewListSection>
                                    )
                                }
                            </CreateNewListSection>
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
                                setInputValue={this.setMethod}
                                placeholder="Pre-heat the oven to 180°C &#13;&#10;Peel and finely chopped the onions."
                                style={{ marginTop: "20px", marginBottom: "40px" }} />
                        </form>
                        <Text fontType="h1" color={COLORS.active} style={{ marginTop: "80px", marginRight: "10px", marginBottom: "25px", display: "inline-flex" }}>* Category</Text>
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
        userId: state.user.userDetails.id,
        username: state.user.userDetails.username,
        countOwnerRecipes: state.user.userDetails.countOwnerRecipes
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipePage);
