import s from './header.module.css'
import logo from '../../assets/logo.png'
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdExitToApp } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import { deletetLogInData } from "../../app/redux/auth-reducer";

const Header = (props) => {
    const [isViseble, setIsVisible] = useState(false)
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth.isAuth)

    const handleClickOpenDropdown = () => {
        if (auth) {
            if (!isViseble) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
    }

    const handleLogOut = () => {
        dispatch(deletetLogInData())
        setIsVisible(false)
    }
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt={'Lion'}/>
                ArysBook
            </div>
            <div className={s.login}>
                <BiUser className={s.user} onClick={handleClickOpenDropdown} />
                {isViseble &&
                    <div className={s.settings}>
                        <span className={`${s.username} ${s.item}`}>
                            <span>
                                <BiUser/>
                            </span>
                            {props.login}
                        </span>
                        <span className={s.item}>
                            <button className={s.button} onClick={handleLogOut}>
                                <MdExitToApp />
                                <span>{"logOut"}</span>
                            </button>
                        </span>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;