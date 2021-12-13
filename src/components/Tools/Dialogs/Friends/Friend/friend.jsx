import s from './friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <nav className={s.item}>
            <div>
                <img src={props.image} alt={`Avatar${props.id}`}/>
            </div>
            <div className={s.nav}>
                <NavLink to={"/messages/" + props.id}
                         className={navData1 => navData1.isActive ? s.activeLink : s.item1}>{props.name}</NavLink>
            </div>
        </nav>
    );
};

export default Friend;