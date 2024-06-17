import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from './Friend/Friend'
import ShortProfile from "./ShortProfile/ShortProfile";

const Navbar = (props) => {
    debugger
    let friends = props.friendsList.map(friend => <Friend img={friend.img} name={friend.name} postname={friend.postname} />);
    return <nav className={s.nav}>
        <div>
            <NavLink to='/profile'><ShortProfile/></NavLink>
        </div>
        <div>
            <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div>
            <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <div>
            <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
        </div>
        <div>
            <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
        </div>
        <div>
            <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
        </div>
        <div>
            <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
        </div>
        <div>
            <p>Friends:</p>
            {friends}
        </div>
    </nav>
}

export default Navbar;