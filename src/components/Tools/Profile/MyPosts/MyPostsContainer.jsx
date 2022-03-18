import MyPosts from "./MyPosts";
import {addPost, LikePressed, updateNewPostText} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return{
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return{
        addPost,
        updateNewPostText,
        LikePressed,
    }
}*/

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText, LikePressed,})(MyPosts)

export default MyPostsContainer;