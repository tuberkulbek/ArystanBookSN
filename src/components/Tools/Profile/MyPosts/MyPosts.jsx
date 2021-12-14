import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/store";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostAC());
    }
    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextAC(text)
        props.dispatch(action);
    }

    let postElement = props.postData.map( post => <Post message={post.message}
                                                        likes={post.likes}
                                                        id={post.id}
                                                        dispatch={props.dispatch} /> );
    return (
        <div className={s.items}>
            <div>My posts</div>
            <textarea ref={newPostElement}
                      placeholder={'New post'}
                      value={props.newPostText}
                      onChange={updateNewPostText}/>
            <button onClick={addPost}>add post</button>
            {postElement}
        </div>
    );
};

export default MyPosts;