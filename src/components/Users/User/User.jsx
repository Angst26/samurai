import s from './User.module.css'
import userPhoto from '../../../../src/assets/images/img.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followUser, unFollowUser} from "../../../api/api";

const User = (props) => {
    let onFollow = () => {
        props.toggleFollowing(true)
        followUser(props.id)
            .then((resultCode) => {
                if (resultCode === 0) {
                    props.follow(props.id)
                }
                props.toggleFollowing(false)
            })
            .catch(() => {
                props.toggleFollowing(false)
            })

    }

    let onUnfollow = () => {
        props.toggleFollowing(true)
        unFollowUser(props.id)
            .then((resultCode) => {
                if (resultCode === 0) {
                    props.unfollow(props.id)
                }
                props.toggleFollowing(false)
            })
            .catch(() => {
                props.toggleFollowing(false)
            })

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
                <button disabled={props.followingInProgress} onClick={props.isFollowed ? onUnfollow : onFollow}
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
