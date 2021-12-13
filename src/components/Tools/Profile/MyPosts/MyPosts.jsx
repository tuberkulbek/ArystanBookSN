import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost(props.newPostText);
    }
    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let postElement = props.postData.map( post => <Post message={post.message} likes={post.likes} /> );
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