import MyPosts from "./MyPosts";
import {addPost, LikePressed, LikeUnpressed, updateNewPostText} from "../../../../app/redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return{
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText,
    LikePressed,
    LikeUnpressed})(MyPosts)

export default MyPostsContainer;