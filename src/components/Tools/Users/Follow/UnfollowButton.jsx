import s from "./FollowUnfollow.module.css";
import React from "react";

const FollowUnfollowButton = (props) => {
    return(
        <div>
            {props.followed
                ? <button disabled={props.isInProgress.some(id=>id===props.id)}
                          className={s.button7}
                          onClick={() => {props.unfollow(props.id)}}>
                    UNFOLLOW </button>
                : <button disabled={props.isInProgress.some(id=>id===props.id)}
                          className={s.button7}
                          onClick={() => {props.follow(props.id)}}>
                    FOLLOW </button>}
        </div>
    )
}

export default FollowUnfollowButton;