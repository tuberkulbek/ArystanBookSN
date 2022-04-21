import s from "./Users.module.css";
import React from "react";
import Pagination from "./Pagination";
import FollowUnfollowButton from "./Follow/UnfollowButton";
import UserPhoto from "./UserPhoto/UserPhoto";

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
                    <UserPhoto isFetching={props.isFetching}
                               photos={u.photos}
                               id={u.id}/>
                    <FollowUnfollowButton followed={u.followed}
                                          id={u.id}
                                          follow={props.follow}
                                          unfollow={props.unfollow}
                                          isInProgress={props.isInProgress}/>
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