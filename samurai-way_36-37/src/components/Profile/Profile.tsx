import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                myPostsMessagesData={props.profilePage.myPostsMessagesData}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText:(newText:string)=>void
}