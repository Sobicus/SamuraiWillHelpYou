import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
