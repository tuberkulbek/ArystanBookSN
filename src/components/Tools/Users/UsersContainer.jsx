import {connect} from "react-redux";
import {
    follow, setLoader,
    setTotalUsersCount,
    setUsers,
    setUsersPage,
    unfollow
} from "../../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Loader from "../../../common/Loader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(r => {
                this.props.setLoader(false)
                this.props.setUsers(r.data.items);
                this.props.setTotalUsersCount(r.data.totalCount)
            }
        )
    }

    onPageChange = (p) => {
        this.props.setUsersPage(p)
        this.props.setLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(r => {
                this.props.setUsers(r.data.items);
                this.props.setLoader(false)
                this.props.setTotalUsersCount(r.data.totalCount)
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   follow={this.props.follow}
                   isFetching={this.props.isFetching}
                   setLoader={this.props.setLoader}
                   unfollow={this.props.unfollow}/>
        </>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    };
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUsersPage: (currentPage) => {
            dispatch(setUsersPageAC(currentPage))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        },
        setLoader: (isFetching) => {
            dispatch(setLoaderAC(isFetching))
        }
    }
};*/

export default connect(mapStateToProps, {follow, unfollow, setUsers, setUsersPage, setTotalUsersCount, setLoader})(UsersContainer)