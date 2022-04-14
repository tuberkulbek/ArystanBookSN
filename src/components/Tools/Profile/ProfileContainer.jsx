import Profile from "./profile";
import React from "react";
import {connect} from "react-redux";
import {addPhoto, getUserProfile} from "../../../redux/profile-reducer";
import {Navigate, useMatch} from "react-router";
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
    }

    render() {
        return <Profile {...this.props} profile={this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        addPhoto
    }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)