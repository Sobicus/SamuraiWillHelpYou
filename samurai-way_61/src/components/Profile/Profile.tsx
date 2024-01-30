import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/store";
import {Preloader} from "../common/preloader/Preloader";

export const Profile = (props: ProfileComponentType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
type ProfileComponentType = {
    profile: ProfileType
}
