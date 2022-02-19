import MyPosts from "./MyPosts";
import {addPostAC, LikePressedAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return{
        postData: state.postPage.postData,
        newPostText: state.postPage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addLike: (id) => {
            dispatch(LikePressedAC(id))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;