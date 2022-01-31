import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostAC, LikePressedAC, updateNewPostTextAC} from "../../../../redux/store";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostAC());
    }
    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextAC(text)
        props.dispatch(action);
    }

    let addLike = (id) => {
        props.dispatch(LikePressedAC(id))
    };

    let postElement = props.postData.map( post => <Post message={post.message}
                                                        likes={post.likes}
                                                        id={post.id}
                                                        addLike={addLike} /> );

    return (
        <MyPosts newPostElement={newPostElement}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 postData={props.postData}
                 postElement={postElement}
        />
    );
};

export default MyPostsContainer;