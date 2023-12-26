import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {StateType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


//
// export const MyPostsContainer = (/*props: MyPostsType*/) => {
//     let state = props.store.getState()
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//     const onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text))
//     }
//     return (
//         <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             myPostsMessagesData={state.profilePage.myPostsMessagesData}
//             newPostText={state.profilePage.newPostText}/>
//     )
// }

let mapStateToProps = (state: StateType) => {
    return {
        myPostsMessagesData: state.profilePage.myPostsMessagesData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
// type MyPostsType = {
//     store: StoreType
// }