import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                myPostsMessagesData={props.profilePage.myPostsMessagesData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
}
type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void

}