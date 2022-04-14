import s from "./Users.module.css";
import React from "react";

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p =>
                <span className={`${props.currentPage === p && s.selectedPage} ${s.pages}`}
                      onClick={() => {props.onPageChange(p)}}
                      key={`qweqwe${p}`}>
                    {p}
                </span>)}
        </div>
    )
}

export default Pagination