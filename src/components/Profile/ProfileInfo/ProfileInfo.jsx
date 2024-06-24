import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    return <div>
        <div>{props.profile ?
            <img src={props.profile.photos.large}/>
            : <Preloader/>}
        </div>
        {props.profile ?
            <div className={s.descriptionBlock}>
                <div className={s.aboutme}>{props.profile.aboutMe}</div>
                <div className={s.contacts}>ВК: {props.profile.contacts.vk}</div>
            </div> : <div>loading</div>

        }
    </div>
}


export default ProfileInfo;