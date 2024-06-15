import s from './ShortProfile.module.css'

const ShortProfile = () => {

    return (
        <div className={s.profileCard}>
            <img src="https://live.staticflickr.com/65535/51177662000_273f764149_b.jpg" alt="user"
                 className={s.profilePhoto}/>
            <h5><a href="#" className={s.textWhite}>Юрий Кожин</a></h5>
        </div>
    )
}

export default ShortProfile;


