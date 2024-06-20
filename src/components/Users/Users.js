import React from 'react';
import User from "./User/User";
import axios from "axios";
import styles from "./Users.module.css";

class Users extends React.Component {

    componentDidMount() {
        this.fetchUsers(this.props.currentPage);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.fetchUsers(this.props.currentPage);
        }
    }

    fetchUsers(page) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let users = this.props.usersList.map(user => (
            <User
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                img={user.photos.small}
                id={user.id}
                name={user.name}
                status={user.status}
                postName={user.postName}
                land={user.land}
                city={user.city}
                isFollowed={user.followed}
            />
        ));

        return (
            <div>
                <div>
                    {pages.map(p => (
                        <span
                            key={p}
                            className={p === this.props.currentPage ? styles.selectedPage : ''}
                            onClick={() => this.onPageChange(p)}>
                           {p}
                        </span>
                    ))}
                </div>
                {users}
            </div>
        );
    }
}

export default Users;