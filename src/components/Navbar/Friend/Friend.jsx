import s from './../Navbar.module.css'



const Friend = (props) => {
    return (
        <div className={`${s.friend}`}>
            <img src={props.img}/>
            {props.name} {props.postname}
        </div>
    )
}

export default Friend;