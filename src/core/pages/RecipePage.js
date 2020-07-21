import React from "react";
import { connect } from "react-redux";
import { COLORS } from "../constants";
import PropTypes from "prop-types";
import Text from "../components/Text";

import { Container } from "react-grid-system";
import { withRouter } from "react-router";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import rcp1 from "../images/rcp1.jpeg";
import rcp2 from "../images/rcp2.jpeg";
import rcp3 from "../images/rcp3.jpeg";
import rcp4 from "../images/rcp4.jpeg";
import starActive from "../images/icons/starActive@3x.png";
import starInactive from "../images/icons/starInactive@3x.png";
import TextTruncate from "react-text-truncate";
import axios from "axios";
import { url } from "../data/endpoints";
import noRecipeImg from "../images/noRecipeImg.png"
import addRecipeImage from "../images/addRecipeImage.png"

class RecipePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }
    static propTypes = {
        dispatch: () => { },
        countOwnerRecipes: PropTypes.number,
        username: PropTypes.string,
        history: PropTypes.object,
        userId: PropTypes.number
    }

    goToCreateRecipe = () => {
        this.props.history.push("/createRecipe");
    }

    componentDidMount() {

        // todo: after first login recipes are not appearing, maybe fix this by setting recipes in
        // redux after user login and pass it as props. For some reason passing as props from parent is not
        // working

        const userId = this.props.userId;
        if (userId) {
            const getRecipeByUserIdEndpoint = `${url.baseUrl}${url.recipes}?filter={"where":{"userId":${userId}}}`;
            let data;
            axios.get(`${getRecipeByUserIdEndpoint}`)
                .then((result) => {
                    data = result.data;
                    this.setState({
                        recipes: data
                    });
                    data.map((recipe) => {
                        fetch(`${url.baseUrl}/images/${recipe.id}/download/${recipe.id}_thumb.jpg`)

                            .then(response => response.blob())
                            .then(images => {
                                // Then create a local URL for that image and print it 
                                const source = URL.createObjectURL(images)
                                var res = source.split("blob:");

                                this.setState({
                                    [recipe.id]: res
                                });
                            });
                    });
                });
        }

    }
    componentDidMount() {
        const userId = this.props.userId;
        if (userId) {
            const getRecipeByUserIdEndpoint = `${url.baseUrl}${url.recipes}?filter={"where":{"userId":${userId}}}`;
            axios.get(`${getRecipeByUserIdEndpoint}`)
            .then(
                (result) => {
                    const data = result.data;
                    this.setState({
                        recipes: data
                    });
                }
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.

            );
        }
    }

    componentDidUpdate(prevState) {
        const userId = this.props.userId;
        if (userId && this.props.recipes !== prevState.recipes) {
            const getRecipeByUserIdEndpoint = `${url.baseUrl}${url.recipes}?filter={"where":{"userId":${userId}}}`;
            let data;
            axios.get(`${getRecipeByUserIdEndpoint}`)
            .then((result) => {
                data = result.data;
                this.setState({
                    recipes: data
                },()=>{console.log(this.props.recipes)});
            });
        }
    }


    render() {
        // const { countOwnerRecipes, username } = this.props;
        const companyList = [
            { "name": "Nasa", "image": "https://imgur.com/RTFOOHR" },
            { "name": "Microsoft", "image": "https://imgur.com/yln0oYC" },
            { "name": "Phillips", "image": "https://imgur.com/ZHKnVr8" },
            { "name": "Fox", "image": "https://imgur.com/Hrzbo49" },
            { "name": "Sony", "image": "https://imgur.com/Ld5Ux3g" },
            { "name": "IBM", "image": "https://imgur.com/rg7RAdm" },
            { "name": "Toshiba", "image": "https://imgur.com/aj9vfmu" },
            { "name": "Volvo", "image": "https://imgur.com/hTkpXvw" }
        ];
        const sizeSM = 6;
        const hasRecipes = this.state.recipes.length > 0;
        return (
            <>
                <Container style={{ maxWidth: "1200px" }}>
                    {
                        !hasRecipes ? (
                            <>
                                <Col style={{ marginTop: "20px" }}>

                                    <button onClick={this.goToCreateRecipe} style={{ backgroundColor: "rgba(0,0,0,0)", border: "none", textAlign: "left", cursor: "pointer" }}>
                                        <div style={{ display: "inline-flex" }}>
                                            <img src={noRecipeImg} alt="add recipe" style={{ objectFit: "contain", height: "120px", width: "110px" }} />
                                            <div style={{ marginLeft: "15px" }}>
                                                <Text color={COLORS.active} fontType="hero" style={{ textTransform: "capitalize", marginTop: "5px" }}>Get Cooking!</Text>
                                                {/* alignItems: "center" */}
                                                <div style={{ display: "inline-flex", alignItems: "center", marginTop: "20px", height: "29px" }}>
                                                    <img src={addRecipeImage} alt="add recipe" style={{ objectFit: "contain", height: "29px", width: "29px" }} />
                                                    <Text fontType="bodyLarge" color={COLORS.secondary} style={{ marginLeft: "10px" }}>
                                                        Create a recipe to share with your friends and our community
                                                </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </Col>
                            </>
                        ) : (
                                <Row gutter={45}>
                                    {
                                        this.state.recipes && (
                                            this.state.recipes.map((recipe, index) => {
                                                if(!recipe.draft){
                                                    return (
                                                        <Col key={index} xs={sizeSM} sm={6} md={4} lg={4} xl={4} style={{ marginTop: "25px", minWidth: "400px", maxWidth: "364px" }} >
                                                            <div style={{ height: "300px", backgroundColor: "", marginTop: "20px" }}>
                                                                <img src={`${url.baseUrl}/images/${recipe.id}/download/${recipe.id}_thumb.jpg`} alt="app logo" style={{ width: "100%", height: "300px", backgroundSize: "cover" }} />
                                                            </div>
                                                            <div style={{ height: "148px", marginTop: "10px" }}>
                                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                                    <div>
                                                                        <img src={starActive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                                        <img src={starActive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                                        <img src={starActive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                                        <img src={starActive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                                        <img src={starInactive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                                    </div>
                                                                    <Text fontType="bodyLikesAndReviews" color={COLORS.active}>100+ Likes</Text>
                                                                </div>
                                                                <div style={{ marginTop: "8px" }}>
                                                                    <Text fontType="bodyLikesAndReviews" color={COLORS.active}>50+ Reviews</Text>
                                                                </div>
                                                                <div style={{ marginTop: "8px", height: "44px" }}>
                                                                    <Text fontType="h2Bold" color={COLORS.active}>
                                                                        <TextTruncate
                                                                            line={2}
                                                                            truncateText="…"
                                                                            text={recipe.title}
                                                                            textTruncateChild={<a href="#">Read on</a>}
                                                                        />
                                                                    </Text>
                                                                </div>
                                                                <div style={{ backgroundColor: `${COLORS.primary}`, display: "inline-block", padding: "10px", height: "30px", borderRadius: "8px", marginTop: "16px" }}>
                                                                    <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                                                        <Text fontType={"bodyRegular"} color={`${COLORS.tertiary}`}>
                                                                            {
                                                                                recipe.cookingTimeDays > 0 && (
                                                                                    `${recipe.cookingTimeDays} days `
                                                                                )
                                                                            }
                                                                            {
                                                                                recipe.cookingTimeHrs > 0 && (
                                                                                    `${recipe.cookingTimeHrs} hours `
                                                                                )
                                                                            }
                                                                            {
                                                                                recipe.cookingTimeMins > 0 && (
                                                                                    `${recipe.cookingTimeMins} minutes `
                                                                                )
                                                                            }
                                                                        </Text>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
    
                                                    );
                                                }
                                            })
                                        )
                                    }
                                </Row>
                            )
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RecipePage));
