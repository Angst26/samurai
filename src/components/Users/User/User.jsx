import s from './User.module.css'
import userPhoto from '../../../../src/assets/images/img.png'
import {NavLink} from "react-router-dom";

const User = (props) => {
    let onFollow = () => {
        props.followUser(props.id)
    }

    let onUnfollow = () => {
        props.unfollowUser(props.id)
    }


    return (
        <div className={s.container}>
            <span>
                <NavLink to={`/profile/${props.id}`}>
                    <img className={s.photo} src={props.img != null ? props.img : userPhoto} alt=""/>
                </NavLink>
            </span>
            <span className={s.name}>
                {props.name} {props.postName}
                <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={props.isFollowed ? onUnfollow : onFollow}
                        className={s.followBtn}>{props.isFollowed ? 'unfollow' : 'follow'}</button>
                <div className={s.status}>
                    {props.status}
                </div>
            </span>
            <span className={s.location}>
                {/*<div>country</div>*/}
                {/*<div>city</div>*/}
            </span>
        </div>
    )
}

export default User;
