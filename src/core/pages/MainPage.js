import React from "react";
import { connect } from "react-redux";
import { COLORS } from "../constants";
import PropTypes from "prop-types";

import { BurntButterHeader } from "../components/BurntButterHeader";
import { setUserDetails } from "../data/actions/userActions";
import BurntButter from "../components/Burntbutter";
import Text from "../components/Text";

import ProfileImage from "../components/ProfileImage";
import getUserById from "../data/services/getUserById";
import RecipePage from "./RecipePage";
import DraftPage from "./DraftPage";
import { Container, Row, Col } from "react-grid-system";
import { showEditProfileModal } from "../data/actions/modalActions";
import { withRouter } from "react-router";

class MainPage extends React.Component {

    constructor() {
        super();
        this.state = {
            myRecipes: true
        };
    }
    static propTypes = {
        dispatch: () => { },
        userId: PropTypes.number,
        countOwnerRecipes: PropTypes.number,
        username: PropTypes.string,
        history: PropTypes.object
    }

    componentDidMount() {
        // const details = getUserById(189)
        // .then(res => {
        //     console.log("aqui esta",res.data);
        // })
        // getUserById(189)
        // .then(res => this.props.dispatch(setUserDetails(res.data)));
    }

    goToCreateRecipe = () => {
        this.props.history.push("/createRecipe");
    }

    goToRecipesPage = () => {
        this.setState({
            myRecipes: true
        });
    }

    goToDraft = () => {
        this.setState({
            myRecipes: false
        });
    }

    showModal = () => {
        this.props.dispatch(showEditProfileModal());
    }

    render() {
        const { countOwnerRecipes, username } = this.props;
        return (
            <>
                <BurntButterHeader>
                    <div style={{ display: "inline-flex", width: "100%", flexFlow: "row", height: "100%", alignItems: "center", margin: "0px", justifyContent: "space-between" }}>
                        <div style={{ marginLeft: "121px" }}>
                            <BurntButter />
                        </div>
                        <button onClick={this.goToCreateRecipe} style={{ backgroundColor: "rgba(0,0,0,0)", border: "none", textAlign: "left", cursor: "pointer" }}>
                            <div style={{ display: "flex", alignItems: "center", marginRight: "121px" }}>
                                <Text style={{ marginRight: "59px" }} fontType="h2Semibold" color={COLORS.active}>Create a recipe</Text>
                                <ProfileImage fontType="hero" userName={username} size="62px" />
                            </div>
                        </button>
                    </div>
                </BurntButterHeader>
                <Container style={{ marginTop: "31px", maxWidth: "1200px" }}>
                    <Row>
                        <Col xs={12} md={12} lg={2} >
                            <ProfileImage fontType="heroBig" userName={username} size="132px" />
                            <button onClick={this.showModal} style={{ backgroundColor: "rgba(0,0,0,0)", border: "none", textAlign: "left", cursor: "pointer" }}>
                                <Text fontType="bodySmallRegular" style={{ marginTop: "15px" }} color={COLORS.secondary}>
                                    Edit profile
                                </Text>
                            </button>
                        </Col>
                        <Col xs={12} md={12} lg={10}>
                            <Text color={COLORS.active} fontType="hero" style={{ textTransform: "capitalize", marginTop: "5px" }}>{username}</Text>
                            <Text color={COLORS.inactive} fontType="bodySmallRegular">Click on ‘Edit profile’ to write a little something about yourself.</Text>
                            <div style={{ marginTop: "50px" }}>
                                <Text color={COLORS.active} fontType="bodyRegular" style={{ display: "inline" }}>
                                    {countOwnerRecipes}
                                </Text>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ borderBottom: "1px solid #979797", marginTop: "58px", paddingBottom: "20px", maxWidth: "1200px" }}>
                        <button style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }} onClick={this.goToRecipesPage}>
                            <Text color={COLORS.active} fontType="hero" style={{ textTransform: "capitalize", marginTop: "5px" }}>My recipes</Text>
                        </button>
                        <button style={{ backgroundColor: "rgba(0,0,0,0)", border: "none", marginLeft: "40px" }} onClick={this.goToDraft}>
                            <Text color={COLORS.active} fontType="hero" style={{ textTransform: "capitalize", marginTop: "5px" }}>Draft</Text>
                        </button>
                    </Row>
                </Container>
                {
                    this.state.myRecipes ? (
                        <RecipePage />
                    ) : (
                        <DraftPage />
                    )
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));
