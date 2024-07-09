import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    console.log(props)
    return <div>
        <div>{props.profile ?
            <img src={props.profile.photos.large} alt={''}/>
            : <Preloader/>}
        </div>
        {
            props.profile ?
                (<div className={s.descriptionBlock}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                    <div className={s.contacts}>ВК: {props.profile.contacts.vk}</div>
                </div>)
                :
                (<div>
                    loading
                </div>)

        }
    </div>
}


export default ProfileInfo;