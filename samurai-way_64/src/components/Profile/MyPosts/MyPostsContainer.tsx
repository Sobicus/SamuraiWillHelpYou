import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {StateType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        myPostsMessagesData: state.profilePage.myPostsMessagesData,
        newPostText: state.profilePage.newPostText
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}*/
export const MyPostsContainer = connect(mapStateToProps, {
    addPost: addPostAC,
    updateNewPostText: updateNewPostTextAC
})(MyPosts)
