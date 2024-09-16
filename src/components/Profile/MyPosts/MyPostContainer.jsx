import {addPost, changeNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        // userPhoto: state.profilePage;
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}



const MyPostsContainer = connect(mapStateToProps, {
    changeNewPostText,
    addPost
})(MyPosts)

export default MyPostsContainer;

