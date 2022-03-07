import s from './Users.module.css'
import React from "react";
import user from "../../../user.png"
import Loader from "../../../common/Loader";

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
                    {props.isFetching ? <Loader /> : <img src={u.photos.small != null ? u.photos.small : user} alt={}/>}
                </div>
                <div>
                    {u.followed ? <button className={s.button7} onClick={() => {
                        props.unfollow(u.id)
                    }}>
                        FOLLOW
                    </button> : <button className={s.button7} onClick={() => {
                        props.follow(u.id)
                    }}>
                        UNFOLLOW
                    </button>}
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