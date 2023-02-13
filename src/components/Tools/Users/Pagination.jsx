import s from "./Users.module.css";
import React from "react";
import { useState } from "react";

const Pagination = (props) => {
    let [pages, setPages] = useState([1, 2, 3, 4, 5])
    let handleClickNextPages = (n) => {
        setPages(pages.map(i => i+n<=0?i:i+n))
    }

    return (
        <div className={s.pagination}>
            <div onClick={() => {handleClickNextPages(-10)}} className={s.pointer}>
                {'<<'}
            </div>
            <div onClick={() => {handleClickNextPages(-5)}} className={s.pointer}>
                {'<'}
            </div>
            <div className={s.pages}>
                {pages.map(p =>
                    <span className={`${props.currentPage === p && s.selectedPage} ${s.page}`}
                          onClick={() => {props.onPageChange(p)}}
                          key={`qweqwe${p}`}>
                        {p}
                    </span>)}
            </div>
            <div onClick={() => {handleClickNextPages(5)}} className={s.pointer}>
                {'>'}
            </div>
            <div onClick={() => {handleClickNextPages(10)}} className={s.pointer}>
                {'>>'}
            </div>
        </div>
    )
}

export default Pagination