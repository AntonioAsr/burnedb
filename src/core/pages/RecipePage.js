import React from "react";
import { connect } from "react-redux";
import { COLORS } from "../constants";
import PropTypes from "prop-types";
import { setUserDetails } from "../data/actions/userActions";
import BurntButter from "../components/Burntbutter";
import Text from "../components/Text";
import { Link } from "react-router-dom";
import ProfileSection from "../components/ProfileSection";
import ProfileImage from "../components/ProfileImage";
import getUserById from "../data/services/getUserById";
import { Container } from "react-grid-system";
import addRecipeImage from "../images/addRecipeImage.png";
import noRecipeImg from "../images/noRecipeImg.png";
import appHistory from "../../App";
import { withRouter } from "react-router";
import RecipeGridSystem from "../components/recipesGridSystem";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import rcp1 from "../images/rcp1.jpeg";
import rcp2 from "../images/rcp2.jpeg";
import rcp3 from "../images/rcp3.jpeg";
import rcp4 from "../images/rcp4.jpeg";
import starActive from "../images/icons/starActive@3x.png";
import starInactive from "../images/icons/starInactive@3x.png";
import TextTruncate from 'react-text-truncate'; // recommend
import axios from "axios";
import { url } from "../data/endpoints";

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
        history: PropTypes.object
    }

    goToCreateRecipe = () => {
        this.props.history.push("/createRecipe");
    }

    componentDidMount() {

        if (this.props.countOwnerRecipes > 0) {
            const userId = this.props.userId;
            const getRecipeByUserIdEndpoint = `${url.baseUrl}${url.recipes}?filter={"where":{"userId":${userId}}}`;
            let data;
            axios.get(`${getRecipeByUserIdEndpoint}`)
                .then((result) => {
                    data = result.data;
                    this.setState({
                        recipes: data
                    });
                });
        }
    }

    render() {
        console.log(this.state.recipes);
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
        return (
            <>
                <Container style={{ maxWidth: "1200px" }}>
                    {
                        this.props.countOwnerRecipes === 0 ? (
                            // TODO SWAP render content
                            <>
                                <Row gutter={45} style={{ justifyContent: "center" }}>
                                    <Col xs={sizeSM} sm={6} md={4} lg={4} xl={4} style={{ marginTop: "25px", minWidth: "400px", maxWidth: "400px" }} >
                                        <div style={{ height: "300px", backgroundColor: "red", marginTop: "20px" }}>
                                            <img src={rcp2} alt="app logo" style={{ width: "100%", height: "300px", backgroundSize: "cover" }} />
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
                                                        element="span"
                                                        truncateText="…"
                                                        text="Best recipe you will ever find!"
                                                        textTruncateChild={<a style={{ display: "none" }} href="#">Read on</a>}
                                                    />
                                                </Text>
                                            </div>
                                            <div style={{ backgroundColor: `${COLORS.primary}`, width: "137px", height: "30px", borderRadius: "8px", marginTop: "16px" }}>
                                                <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                                    <Text fontType={"bodyRegular"} color={`${COLORS.tertiary}`}>
                                                        1 hour 40 min
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={sizeSM} sm={6} md={4} lg={4} xl={4} style={{ marginTop: "25px", minWidth: "400px", maxWidth: "400px" }} >
                                        <div style={{ height: "300px", backgroundColor: "red", marginTop: "20px" }}>
                                            <img src={rcp1} alt="app logo" style={{ width: "100%", height: "300px", backgroundSize: "cover" }} />
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
                                            <div style={{ marginTop: "8px" }}>
                                                <Text fontType="h2Bold" color={COLORS.active}>
                                                    <TextTruncate
                                                        line={2}
                                                        element="span"
                                                        truncateText="…"
                                                        text="Recipe title will fall in max two lines and after that it will dot the rest of the title if too long…"
                                                        textTruncateChild={<a style={{ display: "none" }} href="#">Read on</a>}
                                                    />
                                                </Text>
                                            </div>
                                            <div style={{ backgroundColor: `${COLORS.primary}`, width: "137px", height: "30px", borderRadius: "8px", marginTop: "16px" }}>
                                                <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                                    <Text fontType={"bodyRegular"} color={`${COLORS.tertiary}`}>
                                                        1 hour 40 min
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xs={sizeSM} sm={6} md={4} lg={4} xl={4} style={{ marginTop: "25px", minWidth: "400px", maxWidth: "400px" }} >
                                        <div style={{ height: "300px", backgroundColor: "blue", marginTop: "20px" }}>
                                            <img src={rcp3} alt="app logo" style={{ width: "100%", height: "300px" }} />
                                        </div>
                                        <div style={{ height: "148px", marginTop: "10px" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div>
                                                    <img src={starInactive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                    <img src={starInactive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                    <img src={starInactive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                    <img src={starInactive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                    <img src={starInactive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                </div>
                                                <Text fontType="bodyLikesAndReviews" color={COLORS.active}>0+ Likes</Text>
                                            </div>
                                            <div style={{ marginTop: "8px" }}>
                                                <Text fontType="bodyLikesAndReviews" color={COLORS.active}>0+ Reviews</Text>
                                            </div>
                                            <div style={{ marginTop: "8px", height: "44px" }}>
                                                <Text fontType="h2Bold" color={COLORS.active}>
                                                    <TextTruncate
                                                        line={2}
                                                        element="span"
                                                        truncateText="…"
                                                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                                                        textTruncateChild={<a style={{ display: "none" }} href="#">Read on</a>}
                                                    />
                                                </Text>
                                            </div>
                                            <div style={{ backgroundColor: `${COLORS.primary}`, width: "137px", height: "30px", borderRadius: "8px", marginTop: "16px" }}>
                                                <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                                    <Text fontType={"bodyRegular"} color={`${COLORS.tertiary}`}>
                                                        1 hour 40 min
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={sizeSM} sm={6} md={4} lg={4} xl={4} style={{ marginTop: "25px", minWidth: "400px", maxWidth: "400px" }} >
                                        <div style={{ height: "300px", backgroundColor: "blue", marginTop: "20px" }}>
                                            <img src={rcp4} alt="app logo" style={{ width: "100%", height: "300px" }} />
                                        </div>
                                        <div style={{ height: "148px", marginTop: "10px" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div>
                                                    <img src={starActive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                    <img src={starActive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                    <img src={starActive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                    <img src={starActive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                    <img src={starActive} alt="app logo" style={{ width: "17px", height: "17px", backgroundSize: "cover" }} />
                                                </div>
                                                <Text fontType="bodyLikesAndReviews" color={COLORS.active}>75+ Likes</Text>
                                            </div>
                                            <div style={{ marginTop: "8px" }}>
                                                <Text fontType="bodyLikesAndReviews" color={COLORS.active}>22+ Reviews</Text>
                                            </div>
                                            <div style={{ marginTop: "8px", height: "44px" }}>
                                                <Text fontType="h2Bold" color={COLORS.active}>
                                                    <TextTruncate
                                                        line={2}
                                                        element="span"
                                                        truncateText="…"
                                                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                                                        textTruncateChild={<a style={{ display: "none" }} href="#">Read on</a>}
                                                    />
                                                </Text>
                                            </div>
                                            <div style={{ backgroundColor: `${COLORS.primary}`, width: "137px", height: "30px", borderRadius: "8px", marginTop: "16px" }}>
                                                <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                                    <Text fontType={"bodyRegular"} color={`${COLORS.tertiary}`}>
                                                        1 hour 40 min
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={sizeSM} sm={6} md={4} lg={4} xl={4} style={{ marginTop: "25px", minWidth: "400px", maxWidth: "400px" }} >
                                        <div style={{ height: "300px", backgroundColor: "blue", marginTop: "20px" }}>
                                            <img src={rcp2} alt="app logo" style={{ width: "100%", height: "300px" }} />
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
                                                <Text fontType="bodyLikesAndReviews" color={COLORS.active}>400+ Likes</Text>
                                            </div>
                                            <div style={{ marginTop: "8px" }}>
                                                <Text fontType="bodyLikesAndReviews" color={COLORS.active}>33+ Reviews</Text>
                                            </div>
                                            <div style={{ marginTop: "8px", height: "44px" }}>
                                                <Text fontType="h2Bold" color={COLORS.active}>
                                                    <TextTruncate
                                                        line={2}
                                                        element="span"
                                                        truncateText="…"
                                                        text="Lorem Ipsum is simp"
                                                        textTruncateChild={<a style={{ display: "none" }} href="#">Read on</a>}
                                                    />
                                                </Text>
                                            </div>
                                            <div style={{ backgroundColor: `${COLORS.primary}`, width: "137px", height: "30px", borderRadius: "8px", marginTop: "16px" }}>
                                                <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                                    <Text fontType={"bodyRegular"} color={`${COLORS.tertiary}`}>
                                                        1 hour 40 min
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={sizeSM} sm={6} md={4} lg={4} xl={4} style={{ marginTop: "25px", minWidth: "400px", maxWidth: "400px" }} >
                                        <div style={{ height: "300px", backgroundColor: "red", marginTop: "20px" }}>
                                            <img src={rcp1} alt="app logo" style={{ width: "100%", height: "300px", backgroundSize: "cover" }} />
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
                                                        element="span"
                                                        truncateText="…"
                                                        text="Recipe title will fall in max two lines and after that it will dot the rest of the title if too long…"
                                                        textTruncateChild={<a style={{ display: "none" }} href="#">Read on</a>}
                                                    />
                                                </Text>
                                            </div>
                                            <div style={{ backgroundColor: `${COLORS.primary}`, width: "137px", height: "30px", borderRadius: "8px", marginTop: "16px" }}>
                                                <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                                    <Text fontType={"bodyRegular"} color={`${COLORS.tertiary}`}>
                                                        1 hour 40 min
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </>
                        ) : (
                            <Row gutter={45} style={{ justifyContent: "center" }}>
                                {
                                    this.state.recipes && (
                                        this.state.recipes.map((recipe, index) => {
                                            return (
                                                <Col key={index} xs={sizeSM} sm={6} md={4} lg={4} xl={4} style={{ marginTop: "25px", minWidth: "400px", maxWidth: "400px" }} >
                                                    <div style={{ height: "300px", backgroundColor: "red", marginTop: "20px" }}>
                                                        <img src={rcp2} alt="app logo" style={{ width: "100%", height: "300px", backgroundSize: "cover" }} />
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
                                                        <div style={{ backgroundColor: `${COLORS.primary}`, width: "137px", height: "30px", borderRadius: "8px", marginTop: "16px" }}>
                                                            <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                                                <Text fontType={"bodyRegular"} color={`${COLORS.tertiary}`}>
                                                                    {`${recipe.cookingTimeHrs} hour `}
                                                                    {`${recipe.cookingTimeMins} min`}
                                                                </Text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                            );
                                        })
                                    )
                                }
                                )
                                </Row>
                                // this component is shown if user has no recipes
                                // <button onClick={this.goToCreateRecipe} style={{ backgroundColor: "rgba(0,0,0,0)", border: "none", textAlign: "left", cursor: "pointer" }}>
                                //     <div style={{ display: "inline-flex" }}>
                                //         <img src={noRecipeImg} alt="add recipe" style={{ objectFit: "contain", height: "120px", width: "110px" }} />
                                //         <div style={{ marginLeft: "15px" }}>
                                //             <Text color={COLORS.active} fontType="hero" style={{ textTransform: "capitalize", marginTop: "5px" }}>Get Cooking!</Text>
                                //             {/* alignItems: "center" */}
                                //             <div style={{ display: "inline-flex", alignItems: "center", marginTop: "20px", height: "29px" }}>
                                //                 <img src={addRecipeImage} alt="add recipe" style={{ objectFit: "contain", height: "29px", width: "29px" }} />
                                //                 <Text fontType="bodyLarge" color={COLORS.secondary} style={{ marginLeft: "10px" }}>
                                //                     Create a recipe to share with your friends and our community
                                //                 </Text>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </button>


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
