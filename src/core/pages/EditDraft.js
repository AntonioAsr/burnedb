import React from "react";
import PropTypes from "prop-types";
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
// replace for svg
import camera from "../images/camera1.png";
import cameraHover from "../images/cameraHover.png";
import cameraFocusCreateRecipe from "../images/cameraFocusCreateRecipe.png";

import select_photo_button from "../images/select_photo_button.svg";
import select_photo_button_hover from "../images/select_photo_button_hover.svg";
import select_photo_button_focus from "../images/select_photo_button_focus.svg";

import addSecondarDisalbed from "../images/icons/addSecondarDisalbed.png";
import addTertiary from "../images/icons/addTertiary.png";
import removeItemBin from "../images/icons/removeItemBin.png";
import createRecipe from "../data/services/createRecipe";
import postRecipeImage from "../data/services/postRecipeImage";
import DragAndDropImage from "../components/DragAndDropImage";
import {
    IncreaseQuantityActiveButton,
    DecreaseQuantityInactive,
    DecreaseQuantityActive
} from "../components/QuantityButtons";
import { url } from "../data/endpoints";
import axios from "axios";
import { withRouter } from "react-router";



class EditDraft extends React.Component {

    constructor() {
        super();
        this.state = {
            recipes: [],
            currentDraft: [],
            recipeTitle: "",
            photoUrl: "",
            src: camera,
            srcWithFile: select_photo_button,
            numberOfLists: 0,
            servesType: "",
            days: 0,
            hours: 0,
            minutes: 0,
            method: "",
            category: "Starter",
            ingredientList0: "",
            ingredientList1: "",
            showList1: false,
            showList2: false,
            descriptionAndTags: "",
            imgFile: {},
            imageUrl: "",
            categories: [],
            DragAndDropImage: "",
            selectedCategory: "",
            categoryId: 2
        };
        this.inputRef = React.createRef();
    }

    static propTypes = {
        dispatch: () => {},
        currentDraftId: PropTypes.number,
        userId: PropTypes.number,
        username: PropTypes.string,
        currentDraft: PropTypes.array
    }

    componentDidMount() {
        const userId = this.props.userId;
        const currentDraft = this.props.currentDraft;
        const recipeId = currentDraft.id;
        axios.get(`${url.baseUrl}/categories`)
        .then((response)=>{
            const data = response.data;
            const currentCategory = currentDraft.categoryId ? data.filter(category=> category.id === currentDraft.categoryId)[0] : 0
            const ingredientsList0 = currentDraft ? currentDraft.ingredientsLists[0].ingredients : "";
            let ingredientList0Formatted = "";
            ingredientsList0.map((ingredientListElemnt)=>{
                ingredientList0Formatted += ingredientListElemnt.ingredient + "\n";
            })
            this.setState({
                categories: data,
                selectedCategory: currentCategory ? currentCategory.name : "",
                ingredientList0: ingredientList0Formatted
            });
        });

        this.setState({
            recipeId: recipeId,
            recipeTitle: currentDraft ? currentDraft.title : "",
            src: camera,
            srcWithFile: select_photo_button,
            servesType: currentDraft.servesType ? currentDraft.servesType : "Serves",
            serves: currentDraft.serves ? currentDraft.serves : 0,
            numberOfLists: 0,
            days: currentDraft.cookingTimeDays ? currentDraft.cookingTimeDays : 0,
            hours: currentDraft.cookingTimeHrs ? currentDraft.cookingTimeHrs : 0,
            minutes: currentDraft.cookingTimeMins ? currentDraft.cookingTimeMins : 0,
            method: "",
            categbory: "Starter",
            ingredientList0: "",
            ingredientList1: "",
            showList1: false,
            showList2: false,
            descriptionAndTags: currentDraft.description ? currentDraft.description : "",
            imgFile: {},
            imageUrl: "",
            categories: [],
            hasBackgroundImage: ""
        });
        if (userId) {

            fetch(`${url.baseUrl}/images/${recipeId}/download/${recipeId}.jpg`)
            .then(response => {
                if(response.status!==404){
                    response = response.blob()
                    .then(image => {
        
                        // Then create a local URL for that image and print it 
                        const source = URL.createObjectURL(image);
                        var res = source.split("blob:")[1];
                        this.setState({
                            hasBackgroundImage: `${url.baseUrl}/images/${recipeId}/download/${recipeId}.jpg`
                        },()=>{console.log(this.state.hasBackgroundImage)});
                    });
                }
            });
        }
    }



    updateImage = (file) => {
        this.setState({
            hasBackgroundImage: ""
        })
        if (file) {
            const reader  = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    imageUrl: reader.result
                });
            };
            if (file) {
                reader.readAsDataURL(file);
                this.setState({
                    imageUrl: reader.result,
                    imgFile: file,
                    picture: file.name
                });
            }
            else {
                this.setState({
                    imageUrl: ""
                });
            }
        }
    };


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

    handleBlurWithImageFile = () => {
        this.setState({
            srcWithFile: select_photo_button
        });
    }

    setFocusState = () => {
        this.setState({
            src: cameraFocusCreateRecipe
        });
    }

    setFocusStateWithFile = () => {
        this.setState({
            srcWithFile: select_photo_button_focus
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

    changeSourceWithFile = () => {
        if (this.state.srcWithFile === select_photo_button_focus) {
            return;
        } else {
            this.setState({
                srcWithFile: select_photo_button_hover
            });
            if (this.state.srcWithFile === select_photo_button_hover) {
                this.setState({
                    srcWithFile: select_photo_button
                });
            }
        }
    }

    decreaseQuantity = (event) => {
        event.preventDefault();
        if (this.state.serves) {
            this.setState({
                serves: this.state.serves - 1
            });
        }
    }

    increaseQuantity = (event) => {
        event.preventDefault();
        this.setState({
            serves: this.state.serves + 1
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
        // post image here /userImages/{container}/upload
        createRecipe({
            title: this.state.recipeTitle,
            picture: "image",
            description: this.state.descriptionAndTags,
            hashtags: "",
            ingredientsStrings: this.state.ingredientList0,
            serves: this.state.serves,
            servesType: this.state.servesType,
            draft: false,
            cookingTimeDays: this.state.days,
            cookingTimeHrs: this.state.hours,
            cookingTimeMins: this.state.minutes,
            ownerUsername: this.props.username,
            userId: this.props.userId,
            categoryId: this.state.selectCategory
        }, this.state.imgFile);
    }

    selectCategory = (event) => {
        event.preventDefault();
        this.setState({
            selectedCategory: event.target.id,
            categoryId: event.target.dataset.value
        });
        document.getElementById("myDropdown").classList.toggle("show");
    }


    handleChange = (e) => {
        this.setState(prevState => ({
            currentDraft: {
                ...prevState.currentDraft,
                [prevState.currentDraft.recipeTitle]: e.target.value
            }
        }));
    };
    
    toggleServes =()=>{
        if (this.state.servesType === "Makes"){
            this.setState({
                servesType:  "Serves"
            })
        } else {
            this.setState({
                servesType: "Makes"
            })
        }
    }

    saveAsDraft = () => {
        if (!this.state.recipeTitle) {
            return;
        } else {
            createRecipe({
                title: this.state.recipeTitle,
                picture: "image",
                description: this.state.descriptionAndTags,
                hashtags: "",
                ingredientsStrings: this.state.ingredientList0,
                serves: this.state.serves,
                servesType: "Serves",
                draft: true,
                cookingTimeDays: this.state.days,
                cookingTimeHrs: this.state.hours,
                cookingTimeMins: this.state.minutes,
                ownerUsername: this.props.username,
                userId: this.props.userId,
                categoryId: this.state.selectedCategory
            }, this.state.imgFile)
            // .then(this.props.history.push("/"))
        }
    }

    render() {
        const canSaveAsDraft = this.state.recipeTitle ? true : false;
        const recipeId = this.state.recipeId;

        // const { countOwnerRecipes, username } = this.props;
        return (
            // <>
            //     {this.state.recipeTitle}
            //     {this.state.hasBackgroundImage}
            // </>
            <>
                <CreateRecipeHeader>
                    {/* grid is causes problems in mobile */}
                    <div style={{ alignItems: "center", width: "100%", display: "grid", gridTemplateColumns: "100px auto 200px" }}>
                        <div style={{ marginLeft: "28px" }}>
                            <XCloseButtonBlack style={{ height: "18px", width: "18px" }} />
                        </div>
                        <Text className="truncate" fontType="hero" color={COLORS.active}>{this.state.recipeTitle ? `${this.state.recipeTitle}(Draft)` : "Edit Draft"}</Text>
                        <div style={{ display: "flex" }}>
                            {/*chnage color and background colro dependin gon status */}
                            <ButtonSmallOutlined onClick={this.postRecipe} style={{ marginRight: "20px" }}>
                                <Text fontType="h5SemiBold" style={{ color: COLORS.inactive }}>
                                    Post Recipe
                                </Text>
                            </ButtonSmallOutlined>

                            <ButtonSmallFilled onClick={this.saveAsDraft} cursor={canSaveAsDraft} backgroundColor={this.state.recipeTitle ? COLORS.primary : COLORS.dTertiaryVariant1} style={{ marginRight: "29px" }}>
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
                    {
                        // if there is no file we render a component that uses specific images and methods
                        this.state.imageUrl ? (
                            <div onFocus={this.setFocusStateWithFile} onBlur={this.handleBlurWithImageFile}
                                style={{
                                    backgroundImage: `url(${this.state.imageUrl})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                }}>
                                <DragAndDropImage updateImage={this.updateImage}>
                                    <DotArea onMouseEnter={this.changeSourceWithFile} onMouseLeave={this.changeSourceWithFile}>
                                        <img src={this.state.srcWithFile} alt="The current outlet" style={{ height: "112px", width: "347px", objectFit: "cover" }} />
                                    </DotArea>
                                </DragAndDropImage>
                            </div>
                        ) : (
                            <div ref={this.inputRef} onFocus={this.setFocusState} onBlur={this.handleBlur}>
                                <DragAndDropImage updateImage={this.updateImage}>
                                    <DotArea onMouseEnter={this.changeSource} onMouseLeave={this.changeSource}>
                                        {this.state.hasBackgroundImage && (
                                            <img src={this.state.hasBackgroundImage} alt="app logo" style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}/>
                                        )}
                                        <img src={this.state.src} alt="The current outlet" style={{ height: "112px", width: "347px", position: "absolute" }} />
                                    </DotArea>
                                </DragAndDropImage>
                            </div>

                        )
                    }


                    <Text fontType="h1" color={COLORS.active} style={{ marginTop: "18px" }}>
                        * Title
                    </Text>
                    <div style={{ marginTop: "14px" }}>
                        <form action="">
                            <InputField
                                hasFocus={false}
                                setInputValue={this.setRecipeTitle}
                                placeholder="Write your recipe title here"
                                value={this.state.recipeTitle ? this.state.recipeTitle : ""}
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
                                value={this.state.descriptionAndTags ? this.state.descriptionAndTags : ""}
                            />
                            {/* add diners quantity input and change to space between */}

                            <div style={{ display: "inline-flex", alignItems: "center", width: "100%", flexWrap: "wrap", justifyContent: "space-between" }}>
                                <div style={{ display: "inline-flex", height: "100%", alignItems: "center", marginTop: "64px" }}>
                                    <input onClick={this.toggleServes} checked={this.state.servesType === "Serves"} type="radio" name="Serves" value="Serves" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
                                    <label htmlFor="Serves" style={{ marginLeft: "20px" }}>
                                        <Text fontType="h1" color={COLORS.active}>Serves</Text>
                                    </label>
                                    <input onClick={this.toggleServes} checked={this.state.servesType === "Makes"} type="radio" name="Makes" value="Makes" style={{ width: "40px", height: "30px", marginLeft: "20px",  cursor: "pointer" }} />
                                    <label htmlFor="Makes" style={{ marginLeft: "20px" }}>
                                        <Text fontType="h1" color={COLORS.active}>Makes</Text>
                                    </label>
                                </div>

                                <div style={{ display: "inline-flex", flexWrap: "wrap", marginTop: "64px" }}>
                                    <div style={{ display: "inline-flex", alignItems: "center" }}>
                                        {
                                            this.state.serves === 0 ? (
                                                <DecreaseQuantityInactive onClick={this.decreaseQuantity}></DecreaseQuantityInactive>
                                            ) : (
                                                <DecreaseQuantityActive onClick={this.decreaseQuantity}></DecreaseQuantityActive>
                                            )
                                        }
                                        <Text fontType="h1" style={{ marginLeft: "47px", minWidth: "40px", display: "flex", justifyContent: "center" }} color={COLORS.active}>
                                            {this.state.serves}
                                        </Text>
                                        <IncreaseQuantityActiveButton onClick={this.increaseQuantity} style={{ marginLeft: "47px" }}></IncreaseQuantityActiveButton>
                                    </div>
                                </div>
                            </div>

                            {/* Time boxes section */}
                            <div style={{ display: "flex", height: "100%", alignItems: "center", marginTop: "64px", flexWrap: "wrap" }}>
                                <Text fontType="h1" color={COLORS.active}>* Cooking Time</Text>
                                <TimeBox setInputValue={this.setDays} value={this.state.days ? this.state.days : 0 } inputStyles={{ marginLeft: "20px", width: "60px", height: "60px" }} labelText="Days" />
                                <TimeBox setInputValue={this.setHours} value={this.state.hours ? this.state.hours : 0 } inputStyles={{ marginLeft: "20px", width: "60px", height: "60px" }} labelText="Hours" />
                                <TimeBox setInputValue={this.setMinutes} value={this.state.minutes ? this.state.minutes : 0 } inputStyles={{ marginLeft: "20px", width: "60px", height: "60px" }} labelText="Minutes" />
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
1 ½ tsp baking powder"
value={this.state.ingredientList0 ? this.state.ingredientList0: ""} style={{ marginTop: "20px", marginBottom: "40px" }}></TextArea>



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
                        <DropDownButton
                            categories={this.state.categories}
                            selectCategory={this.selectCategory}
                            selectedCategory={this.state.selectedCategory}
                        />
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
        countOwnerRecipes: state.user.userDetails.countOwnerRecipes,
        currentDraft: state.recipes.currentDraft
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditDraft));
