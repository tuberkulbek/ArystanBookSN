import s from './header.module.css'
import logo from '../../logo.png'
import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                <img src={logo} alt={'Lion'}/>
                ArysBook
            </div>
            <div className={s.login}>
                {props.isAuth ? <NavLink to={'/login'}>{props.login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;