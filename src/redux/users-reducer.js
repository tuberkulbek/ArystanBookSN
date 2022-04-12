import {usersAPI} from "../API/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_USERS_PAGE = "SET_USERS_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_LOADER = "SET_LOADER"
const DISABLE_FOLLOWING_BUTTON = "DISABLE_FOLLOWING_BUTTON"

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 21,
    currentPage: 1,
    isFetching: true,
    isInProgress: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: [...state.users.map((u) => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })]
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: [...state.users.map((u) => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })]
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        case SET_USERS_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUserCount: action.usersCount
            };
        }
        case SET_LOADER: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case DISABLE_FOLLOWING_BUTTON: {
            return {
                ...state,
                isInProgress: action.isInProgress
                    ? [...state.isInProgress, action.userId]
                    : state.isInProgress.filter(id => id !== action.userId)
            };
        }
        default: {
            return state;
        }
    }
}

export const followS = (userId) => ({type: FOLLOW, userId})
export const unfollowS = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setUsersPage = (currentPage) => ({type: SET_USERS_PAGE, currentPage})
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount})
export const setLoader = (isFetching) => ({type: SET_LOADER, isFetching})
export const disableFollowingButton = (isInProgress, userId) => ({type: DISABLE_FOLLOWING_BUTTON, isInProgress, userId})
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setLoader(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setLoader(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}
export const follow = (id) => {
    return (dispatch) => {
        dispatch(disableFollowingButton(true, id))
        usersAPI.follow(id).then(data => {
            if(data.resultCode === 0){
                dispatch(followS(id))
            }
            dispatch(disableFollowingButton(false, id))
        })
    }
}
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(disableFollowingButton(true, id))
        usersAPI.unfollow(id).then(data => {
            if(data.resultCode === 0){
                dispatch(unfollowS(id))
            }
            dispatch(disableFollowingButton(false, id))
        })
    }
}

export default userReducer

export class followTC {
}