const addPost = "addPost"
const updateNewPostText = "updateNewPostText"
const LikePressed = "LikePressed"

let initialState = {
    postData: [
        {message: 'Hello, World', likes: 15, id: 1},
        {message: 'Its My Life', likes: 60, id: 2},
        {message: 'HELLOMOTHERFUCKER', likes: 12, id: 3},
        {message: 'CHE NAHYI??', likes: 22, id: 4},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:{
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
        case updateNewPostText:{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case LikePressed:{
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
        default:{
            return {
                ...state
            };
        }
    }
}

export const addPostAC = () => ({type: addPost})
export const updateNewPostTextAC = (text) => ({type: updateNewPostText, newText: text})
export const LikePressedAC = (id) => ({type: LikePressed, id: id})

export default profileReducer
