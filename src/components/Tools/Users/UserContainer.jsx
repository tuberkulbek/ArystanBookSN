import {connect} from "react-redux";
import User from "./User";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))

        }
    }
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UserContainer