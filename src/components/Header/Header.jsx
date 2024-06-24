import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.login}>{props.isAuth? props.login : <NavLink to={'/login'}>Login</NavLink>}</div>
        <div></div>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
    </header>
}

export default Header;