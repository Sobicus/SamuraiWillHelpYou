import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MessagesDataType, MyPostsMessagesDataType} from "../../index";

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostsMessagesData={props.myPostsMessagesData}/>
        </div>
    )
}
type ProfileType = {
    myPostsMessagesData:MyPostsMessagesDataType[]
}