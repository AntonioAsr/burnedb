import React from "react";
import { connect } from "react-redux";
import { COLORS } from "../constants";
import PropTypes from "prop-types";

import Text from "../components/Text";
import noDrafts from "../images/draft.png";
import { Container, Row, Col } from "react-grid-system";
import axios from "axios";
import { url } from "../data/endpoints";
import RecipeGridSystem from "../components/recipesGridSystem";
import editDraft from "../images/editDraft.png";
import { withRouter } from "react-router";
import { setCurrentRecipeDraft } from "../data/actions/recipeActions";

class DraftPage extends React.Component {

    constructor() {
        super();
        this.state = {
            drafts: []
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

        if (this.props.countOwnerRecipes > 0) {
            const userId = this.props.userId;

            const getRecipeByUserIdEndpoint = `${url.baseUrl}${url.recipes}?filter={"where":{"userId":${userId}}}`;
            let data;
            axios.get(`${getRecipeByUserIdEndpoint}`)
            .then((result) => {
                data = result.data;
                const drafts = data.filter(recipe => recipe.draft === true);
                this.setState({
                    drafts: drafts
                });
            });
        }
    }

    goToEditDraftPage = (event) => {
        this.props.dispatch(setCurrentRecipeDraft(event.target.id));
        this.props.history.push("/editDraft");
    }


    render() {
        // const { countOwnerRecipes, username } = this.props;
        const hasDrafts = this.state.drafts.length > 0;
        const sizeSM = 6;

        return (
            <>
                <Container>
                    <Row>
                        {/* need a condtional render here, to check if there are recipes in draft mode.
                        If there are not show image fo clap otherwise show .. */}
                        {/* ask how to get all receipes by user id and it's state */}
                        {
                            this.state.drafts.length > 0 ? (

                                this.state.drafts.map((recipe, key) => {
                                    return (
                                        <Row key={key} gutter={45} style={{ justifyContent: "center" }}>
                                            <Col key={key} xs={sizeSM} sm={6} md={4} lg={4} xl={4} style={{ marginTop: "25px", minWidth: "400px", maxWidth: "400px" }} >
                                                <button onClick={this.goToEditDraftPage} style={{ width: "100%", height: "100%", backgroundColor: "transparent", border: "none", outline: "none" }}>
                                                    <div style={{ height: "300px", backgroundColor: "blue", marginTop: "20px" }}>
                                                        <img id={recipe.id} src={editDraft} alt="app logo" style={{ width: "100%", height: "300px" }} />
                                                    </div>
                                                </button>
                                                <Text fontType="h2Bold" color={COLORS.inactive}>{recipe.title}</Text>
                                            </Col>
                                        </Row>
                                    );
                                })
                            ) : (
                                <Col style={{ marginTop: "20px" }}>
                                    <button style={{ backgroundColor: "rgba(0,0,0,0)", border: "none", textAlign: "left", cursor: "pointer" }}>
                                        <div style={{ display: "inline-flex" }}>
                                            <img src={noDrafts} alt="add recipe" style={{ objectFit: "contain", height: "120px", width: "110px" }} />
                                            <div style={{ marginLeft: "15px" }}>
                                                <Text color={COLORS.active} fontType="hero" style={{ textTransform: "capitalize", marginTop: "5px" }}>Get Cooking!</Text>
                                                {/* alignItems: "center" */}
                                                <div style={{ display: "inline-flex", alignItems: "center", marginTop: "20px", height: "29px" }}>
                                                    {/* <img src={addRecipeImage} alt="add recipe" style={{ objectFit: "contain", height: "29px", width: "29px" }} /> */}
                                                    <Text fontType="bodyLarge" color={COLORS.secondary} style={{ marginLeft: "10px" }}>
                                                        Create a recipe to share with your friends and our community
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </Col>
                            )
                        }

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
        userId: state.user.userDetails.id,
        username: state.user.userDetails.username,
        countOwnerRecipes: state.user.userDetails.countOwnerRecipes
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DraftPage));
