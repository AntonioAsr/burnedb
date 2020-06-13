import React from "react";
import { connect } from "react-redux";
import { COLORS } from "../constants";
import PropTypes from "prop-types";

import Text from "../components/Text";
import noDrafts from "../images/draft.png";
import { Container, Row, Col } from "react-grid-system";

class DraftPage extends React.Component {

    constructor() {
        super();
    }
    static propTypes = {
        dispatch: () => { },
        userId: PropTypes.number,
        countOwnerRecipes: PropTypes.number,
        username: PropTypes.string
    }

    componentDidMount() {

    }

    render() {
        // const { countOwnerRecipes, username } = this.props;
        return (
            <>
                <Container>
                    <Row>
                        {/* need a condtional render here, to check if there are recipes in draft mode.
                        If there are not show image fo clap otherwise show .. */}
                        {/* ask how to get all receipes by user id and it's state */}
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

export default connect(mapStateToProps, mapDispatchToProps)(DraftPage);
