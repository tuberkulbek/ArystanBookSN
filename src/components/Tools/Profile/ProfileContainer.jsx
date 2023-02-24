import Profile from "./profile";
import React from "react";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../app/redux/profile-reducer";
import {useMatch} from "react-router";
import {withAuthNavigate} from "../../../HOC/authNavigate";
import {compose} from "redux";

export const withRouter = (Component) =>{
    return (props) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match}/>;
    };
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
        this.props.getStatus(this.props.match.params.userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)