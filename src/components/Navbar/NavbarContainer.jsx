import {connect} from "react-redux";
import Navbar from "./Navbar";

let  mapStateToProps = (state) => {
    debugger
    return{
        friendsList: state.sidebar.friendsList
    }
}

let mapDispatchToProps = (dispatch) => {
    return{

    }
}
debugger
const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)

export default NavbarContainer;