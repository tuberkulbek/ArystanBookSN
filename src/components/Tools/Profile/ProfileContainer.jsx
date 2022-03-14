import Profile from "./profile";
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/profile/2`)
            .then(r => {
                    this.props.setUserProfile(r.data.items);
                }
            )
    }    render(){
        return <Profile {...this.props}/>
    }
}
const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, {

})(ProfileContainer)