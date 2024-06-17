import User from "./User/User";


const Users = (props) => {
    let users = props.usersList.map( user => <User follow={props.follow} unfollow={props.unfollow}
                                                   img={user.img} id={user.id} name={user.name} status={user.status} postName={user.postName} land={user.land} city={user.city} isFollowed={user.followed} />);
    return(
        <div>
            <div>
                {users}
            </div>

        </div>

    )
}

export default Users;