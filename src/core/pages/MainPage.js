import React from "react";
import { BurntButterHeader } from "../components/BurntButterHeader";
import BurntButter from "../components/Burntbutter";
import Text from "../components/Text";
import { COLORS } from "../constants";
import ProfileImage from "../components/ProfileImage";
import getUserById from "../data/services/getUserById";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setUserDetails } from "../data/actions/userActions";

class MainPage extends React.Component {

    static propTypes = {
        dispatch: () => {},
        userId: PropTypes.number,
        username: PropTypes.string
    }

    componentDidMount() {
        getUserById(this.props.userId)
        .then(res => this.props.dispatch(setUserDetails(res.data)));
    }

    render() {
        return (
            <>
                <BurntButterHeader>
                    <div style={{ display: "inline-flex", width: "100%", flexFlow: "row", height: "100%", alignItems: "center", margin: "0px", justifyContent: "space-between" }}>
                        <div style={{ marginLeft: "123px" }}>
                            <BurntButter />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginRight: "121px" }}>
                            <Text style={{ marginRight: "59px" }} fontType="h2Semibold" color={COLORS.active}>Create a recipe</Text>
                            <ProfileImage userName={this.props.username} />
                        </div>
                    </div>
                </BurntButterHeader>
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
        username: state.user.userDetails.username
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
