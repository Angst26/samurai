import s from './User.module.css'
import userPhoto from '../../../../src/assets/images/img.png'
import {NavLink} from "react-router-dom";
import {followUser, unFollowUser} from "../../../api/api";

const User = (props) => {
    let onFollow = () => {
        props.toggleFollowingAdd(props.id )
        followUser(props.id)
            .then((resultCode) => {
                if (resultCode === 0) {
                    props.follow(props.id)
                }
                props.toggleFollowingDel(props.id)
            })
            .catch(() => {
                props.toggleFollowingDel(props.id)
            })

    }

    let onUnfollow = () => {
        props.toggleFollowingAdd(props.id)
        unFollowUser(props.id)
            .then((resultCode) => {
                if (resultCode === 0) {
                    props.unfollow(props.id)
                }
                props.toggleFollowingDel(props.id)
            })
            .catch(() => {
                props.toggleFollowingDel(props.id)
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
