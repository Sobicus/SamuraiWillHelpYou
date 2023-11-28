import React from "react";
import style from './Profile.module.css'
import {MyPosts, myPostsMessagesDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostsMessagesData={props.myPostsMessagesData}/>
        </div>
    )
}
type ProfileType = { myPostsMessagesData: myPostsMessagesDataType[] }