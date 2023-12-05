import React from "react";
import { MyPostsMessagesDataType } from "../../../redux/state";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props: MyPostsType) => {
    const {myPostsMessagesData} = props
    return (
        <div className={style.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {props.myPostsMessagesData.map((myPostsMessagesData) => <Post message={myPostsMessagesData.message} likeCount={myPostsMessagesData.likeCount}/>)}
                </div>
            </div>
        </div>
    )
}
type MyPostsType = {
    myPostsMessagesData: MyPostsMessagesDataType[]
}