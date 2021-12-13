import s from './nav-bar.module.css'
import ToolBar from "./ToolBar/toolBar";

const Navbar = (props) => {
    let addressElement = props.addressData.map( nav1 => <ToolBar address={nav1.address} name={nav1.name} id={nav1.id} />)
    return (
        <nav className={s.nav}>
            {addressElement}
        </nav>
    );
};

export default Navbar;