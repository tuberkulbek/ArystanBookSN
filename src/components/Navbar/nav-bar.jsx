import s from './nav-bar.module.css'
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";


const Navbar = (props) => {
    const profileId = useSelector((state) => state.auth.id)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={`/profile/${profileId}`} className = { navData => navData.isActive ? s.activeLink : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" className = { navData => navData.isActive ? s.activeLink : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className = { navData => navData.isActive ? s.activeLink : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className = { navData => navData.isActive ? s.activeLink : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className = { navData => navData.isActive ? s.activeLink : s.item }>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/games" className = { navData => navData.isActive ? s.activeLink : s.item }>Games</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/todo" className = { navData => navData.isActive ? s.activeLink : s.item }>TODO</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className = { navData => navData.isActive ? s.activeLink : s.item }>Users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;