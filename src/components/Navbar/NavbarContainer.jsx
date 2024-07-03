import {connect} from "react-redux";
import Navbar from "./Navbar";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let  mapStateToProps = (state) => {
    return{
        friendsList: state.sidebar.friendsList
    }
}

let mapDispatchToProps = (dispatch) => {
    return{

    }
}

const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(withAuthRedirect(Navbar))

export default NavbarContainer;