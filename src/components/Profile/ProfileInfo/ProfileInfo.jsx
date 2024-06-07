import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return <div>
        <div >
            <img src='https://live.staticflickr.com/65535/51177662000_273f764149_b.jpg' />
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>

    </div>
}

export default ProfileInfo;