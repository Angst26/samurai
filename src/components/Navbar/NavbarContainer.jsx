import {connect} from "react-redux";
import Navbar from "./Navbar";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        friendsList: state.sidebar.friendsList,
        myId: state.profilePage.myId,
    }
}


let NavbarContainer = compose(
    connect(mapStateToProps, {}),
)(Navbar);
export default NavbarContainer