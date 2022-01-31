import s from './MyPosts.module.css'
import React from "react";

const MyPosts = (props) => {
    return (
        <div className={s.items}>
            <div>My posts</div>
            <textarea ref={props.newPostElement}
                      placeholder={'New post'}
                      value={props.newPostText}
                      onChange={props.updateNewPostText}/>
            <button onClick={props.addPost}>add post</button>
            {props.postElement}
        </div>
    );
};

export default MyPosts;