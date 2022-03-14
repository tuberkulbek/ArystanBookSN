import s from './header.module.css'
import logo from '../../logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt={'Lion'}/>
            ArysBook
        </header>
    );
};

export default Header;