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
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(postInfo);
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case updateNewPostText:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case LikePressed:{
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            const kike = stateCopy.postData.find((item) => item.id === action.id)
            if (kike) {
                kike.likes++;
            }
            return stateCopy;
        }
        default:{
            let stateCopy = {...state};
            return stateCopy;
        }
    }
}

export const addPostAC = () => ({type: addPost})
export const updateNewPostTextAC = (text) => ({type: updateNewPostText, newText: text})
export const LikePressedAC = (id) => ({type: LikePressed, id: id})

export default profileReducer
