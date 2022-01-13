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
        case addPost:
            let postInfo = {
                message: state.newPostText,
                likes: 0,
                id: state.postData[state.postData.length-1].id
            }
            postInfo.id++
            state.postData.push(postInfo);
            state.newPostText = ''
            return state;
        case updateNewPostText:
            state.newPostText = action.newText;
            return state;
        case LikePressed:
            const kike = state.postData.find((item) => item.id === action.id)
            if (kike) {
                kike.likes++;
            }
            return state;
        default:
            return state;
    }
}

export default profileReducer
