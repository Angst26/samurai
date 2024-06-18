import React from 'react';
import User from "./User/User";
import axios from "axios";


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                this.props.setUsers(response.data.items);
            }
        )

    }


    render() {
        let users = this.props.usersList.map(user => <User follow={this.props.follow} unfollow={this.props.unfollow}
                                                           getUsers={this.getUsers}
                                                           img={user.img} id={user.id} name={user.name}
                                                           status={user.status}
                                                           postName={user.postName} land={user.land} city={user.city}
                                                           isFollowed={user.followed}/>);
        return (
            <div>
                {users}
            </div>

        )
    }
}

export default Users;