import s from "./Users.module.css";
import React from "react";
import user from "../../../user.png";
import Loader from "../../../common/Loader";
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.items}>
        <Pagination currentPage={props.currentPage}
                    totalUserCount={props.totalUserCount}
                    pageSize={props.pageSize}
                    onPageChange={props.onPageChange}/>
        {props.users.map(u =>
            <div key={u.id}>
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