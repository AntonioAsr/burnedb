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
import { Container, Row, Col } from "react-grid-system";
import addRecipeImage from "../images/addRecipeImage.png";
import noRecipeImg from "../images/noRecipeImg.png";

class RecipePage extends React.Component {

    constructor() {
        super();
    }
    static propTypes = {
        dispatch: () => { },
        countOwnerRecipes: PropTypes.number,
        username: PropTypes.string
    }

    render() {
        // const { countOwnerRecipes, username } = this.props;
        return (
            <>
                <Container>
                    <Row>
                        <Col style={{ marginTop: "20px" }}>
                            {
                                this.props.countOwnerRecipes === 0 ? (
                                    <>
                                        <button style={{ backgroundColor: "rgba(0,0,0,0)", border: "none", textAlign: "left", cursor: "pointer" }}>
                                            <div style={{ display: "inline-flex" }}>
                                                <img src={noRecipeImg} alt="add recipe" style={{ objectFit: "contain", height: "120px", width: "110px" }} />
                                                <div style={{ marginLeft: "15px" }}>
                                                    <Text color={COLORS.active} fontType="hero" style={{ textTransform: "capitalize", marginTop: "5px" }}>Get Cooking!</Text>
                                                    {/* alignItems: "center" */}
                                                    <div style={{ display: "inline-flex",alignItems: "center", marginTop: "20px", height: "29px" }}>
                                                        <img src={addRecipeImage} alt="add recipe" style={{ objectFit: "contain", height: "29px", width: "29px" }} />
                                                        <Text fontType="bodyLarge" color={COLORS.secondary} style={{ marginLeft: "10px" }}>
                                                        Create a recipe to share with your friends and our community
                                                        </Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </>
                                ) : (
                                    <div>There are recipes! map through them</div>
                                )
                            }
                        </Col>
                    </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
