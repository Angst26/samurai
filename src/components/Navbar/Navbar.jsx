import react from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Posts/Post";
import Friend from './Friend/Friend'

const Navbar = (props) => {

    let friends = props.sidebar.friendsList.map(friend => <Friend id={friend.id} name={friend.name} postname={friend.postname} img={friend.img}/>)

    return <nav className={s.nav}>

        <div >
            <NavLink to='/profile' className={navData => navData.isActive? s.active : s.item}>Profile</NavLink>
        </div>

        <div>
            <NavLink to='/dialogs' className={ navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </div>

        <div>
            <NavLink to='/news' className={navData => navData.isActive? s.active : s.item}>News</NavLink>
        </div>

        <div>
            <NavLink to='/music' className={navData => navData.isActive? s.active : s.item}>Music</NavLink>
        </div>

        <div>
            <NavLink to='/settings' className={navData => navData.isActive? s.active : s.item}>Settings</NavLink>
        </div>
        <div>
            <p>Friends:</p>
            {friends}

        </div>

    </nav>
}

export default Navbar;