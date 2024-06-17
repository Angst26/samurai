import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC} from "../../redux/usersReducer";


// const UsersContainer = (props) => {
//     return(
//         <>users will be here</>
//     )
// }

let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {dispatch(followAC(id))},
        unfollow: (id) => {dispatch(unfollowAC(id))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;