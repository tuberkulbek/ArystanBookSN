const follow = "follow"
const unfollow = "unfollow"
const setUsers = "setUsers"
const setUsersPage = "setUsersPage"
const setTotalUsersCount = "setTotalUsersCount"
const setLoader = "setLoader"

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUserCount: 21,
    currentPage: 1,
    followed: false,
    isFetching: true
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow: {
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
        case unfollow: {
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
        case setUsers: {
            return {
                ...state,
                users: action.users
            };
        }
        case setUsersPage: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case setTotalUsersCount: {
            return {
                ...state,
                totalUserCount: action.usersCount
            };
        }
        case setLoader: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default: {
            return state;
        }
    }
}

export const followAC = (userId) => ({type: follow, userId})
export const unfollowAC = (userId) => ({type: unfollow, userId})
export const setUsersAC = (users) => ({type: setUsers, users})
export const setUsersPageAC = (currentPage) => ({type: setUsersPage, currentPage})
export const setTotalUsersCountAC = (usersCount) => ({type: setTotalUsersCount, usersCount})
export const setLoaderAC = (isFetching) => ({type: setLoader, isFetching})

export default userReducer