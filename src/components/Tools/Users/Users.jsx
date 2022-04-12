import s from "./Users.module.css";
import React from "react";
import user from "../../../user.png";
import Loader from "../../../common/Loader";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.items}>
        <div>
            {
                pages.map(p => <span
                    className={`${props.currentPage === p && s.selectedPage} ${s.pages}`}
                    onClick={() => {
                        props.onPageChange(p)
                    }}
                    key={`qweqwe${p}`}>{p}</span>)
            }
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    {props.isFetching
                        ? <Loader />
                        : <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : user} alt={u.id}/>
                        </NavLink>}
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.isInProgress.some(id=>id===u.id)}
                                  className={s.button7}
                                  onClick={() => {props.unfollow(u.id)}}>
                        UNFOLLOW </button>
                        : <button disabled={props.isInProgress.some(id=>id===u.id)}
                                  className={s.button7}
                                  onClick={() => {props.follow(u.id)}}>
                        FOLLOW </button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                    <div>
                        {"u.location.country"}
                    </div>
                    <div>
                        {"u.location.city"}
                    </div>
                </span>
            </span>
        </div>)}
    </div>;
}

export default Users;