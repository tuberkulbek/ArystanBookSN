import s from './toolBar.module.css'
import {NavLink} from "react-router-dom";

const ToolBar = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.address} className = { navData => navData.isActive ? s.activeLink : s.item } id={props.id}>{props.name}</NavLink>
        </div>
    );
};

export default ToolBar;
