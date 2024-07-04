import {connect} from "react-redux";
import Navbar from "./Navbar";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        friendsList: state.sidebar.friendsList
    }
}


let NavbarContainer = compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(Navbar);
export default NavbarContainer