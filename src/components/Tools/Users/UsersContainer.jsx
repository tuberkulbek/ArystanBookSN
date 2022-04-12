import {connect} from "react-redux";
import {
    disableFollowingButton,
    follow, getUsers, setLoader,
    setUsersPage,
    unfollow
} from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Loader from "../../../common/Loader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (p) => {
        this.props.setUsersPage(p)
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader/> : null}
            <Users //state
                   totalUserCount={this.props.totalUserCount}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   isInProgress={this.props.isInProgress}
                   //dispatch
                   onPageChange={this.onPageChange}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setLoader={this.props.setLoader}
                   disableFollowingButton={this.props.disableFollowingButton}/>
        </>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        isInProgress: state.userPage.isInProgress,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsersPage,
    setLoader,
    disableFollowingButton,
    getUsers,
})(UsersContainer)