import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = (props: MyPostsType) => {
    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            myPostsMessagesData={state.profilePage.myPostsMessagesData}
            newPostText={state.profilePage.newPostText}/>
    )
}
type MyPostsType = {
    store: StoreType
    /*
        myPostsMessagesData: MyPostsMessagesDataType[]
        newPostText: string
        dispatch: (action: any) => void
        */
}