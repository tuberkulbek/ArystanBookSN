import {profileAPI} from "../request/profile/index";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const LIKE_PRESSED = "LIKE_PRESSED"
const LIKE_UNPRESSED = "LIKE_UNPRESSED"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const GET_USER_STATUS = "GET_USER_STATUS"
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS"

let initialState = {
    postData: [
        {message: 'Hello, World', likes: 15, id: 1, isLiked: false},
        {message: 'Its My Life', likes: 60, id: 2, isLiked: false},
        {message: 'HELLOMOTHERFUCKER', likes: 12, id: 3, isLiked: false},
        {message: 'CHE NAHYI??', likes: 22, id: 4, isLiked: false},
    ],
    profileID: 2,
    newPostText: '',
    status: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let postInfo = {
                message: state.newPostText,
                likes: 0,
                id: state.postData[state.postData.length-1].id
            }
            postInfo.id++
            return {
                ...state,
                postData: [...state.postData, postInfo],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case LIKE_UNPRESSED:{
            return {
                ...state,
                postData: [...state.postData.map((item) => {
                    if(item.id === action.id && item.isLiked === true){
                        item.likes--;
                        item.isLiked = false
                    }
                    return item
                })]
            };
        }
        case LIKE_PRESSED:{
            return {
                ...state,
                postData: [...state.postData.map((item) => {
                    if(item.id === action.id && item.isLiked === false){
                        item.likes++;
                        item.isLiked = true
                    }
                    return item
                })]
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile,
                profileID: action.profile.userId,
            };
        }
        case GET_USER_STATUS:{
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_USER_STATUS:{
            return {
                ...state,
                status: action.newStatus
            }
        }
        default:{
            return {
                ...state
            };
        }
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText})
export const LikePressed = (id) => ({type: LIKE_PRESSED, id})
export const LikeUnpressed  = (id) => ({type: LIKE_UNPRESSED, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const getUserStatus = (status) => ({type: GET_USER_STATUS, status})
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(status=> {
            dispatch(getUserStatus(status));
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(r=> {
            if(r.resultCode === 0){
                dispatch(getUserStatus(status));
            }
        })
    }
}

export default profileReducer