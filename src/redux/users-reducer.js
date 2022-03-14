const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_USERS_PAGE = "SET_USERS_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_LOADER = "SET_LOADER"

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 21,
    currentPage: 1,
    isFetching: true
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
        default: {
            return state;
        }
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setUsersPage = (currentPage) => ({type: SET_USERS_PAGE, currentPage})
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount})
export const setLoader = (isFetching) => ({type: SET_LOADER, isFetching})

export default userReducer