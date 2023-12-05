import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostsMessagesData={props.state.myPostsMessagesData} addPost={props.addPost}/>
        </div>
    )
}
type ProfileType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}