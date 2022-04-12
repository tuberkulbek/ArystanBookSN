import {usersAPI} from "../API/api";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const LIKE_PRESSED = "LIKE_PRESSED"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    postData: [
        {message: 'Hello, World', likes: 15, id: 1},
        {message: 'Its My Life', likes: 60, id: 2},
        {message: 'HELLOMOTHERFUCKER', likes: 12, id: 3},
        {message: 'CHE NAHYI??', likes: 22, id: 4},
    ],
    profileID: 2,
    newPostText: '',
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
        case LIKE_PRESSED:{
            return {
                ...state,
                postData: [...state.postData.map((item) => {
                    if(item.id === action.id){
                        item.likes++;
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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export default profileReducer