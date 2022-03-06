import s from './Users.module.css'

import React from "react";

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
                    onClick={(e) => {
                        props.onPageChange(p)
                    }}
                    key={`qweqwe${p}`}>{p}</span>)
            }
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small} alt={u.id}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>
                        FOLLOW
                    </button> : <button onClick={() => {
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