import {addPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        myPostsMessagesData: state.profilePage.myPostsMessagesData,
    }
}
export const MyPostsContainer = connect(mapStateToProps, {
    addPost: addPostAC
})(MyPosts)
