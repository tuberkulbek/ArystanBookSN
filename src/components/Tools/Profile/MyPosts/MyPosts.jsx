import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement = props.postData.map( post => <Post message={post.message}
                                                        likes={post.likes}
                                                        id={post.id}
                                                        key={post.id}
                                                        addLike={props.addLike} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

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