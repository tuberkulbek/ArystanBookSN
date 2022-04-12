import Profile from "./profile";
import React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profile-reducer";
import {useMatch} from "react-router";

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

let WithRouterExtraComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfile,
})(WithRouterExtraComponent)