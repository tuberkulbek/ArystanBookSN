import Profile from "./profile";
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/profile/22817`)
            .then(r => {
                    this.props.setUserProfile(r.data.items);
                }
            )
    }

    render(){
        return <Profile {...this.props} profile={this.props.profile} />
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUserProfile,

})(ProfileContainer)