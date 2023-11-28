import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props: MyPostsType) => {

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
                    {props.myPostsMessagesData.map((myPostsMessagesData) => <Post message={myPostsMessagesData.message}
                                                                                  likeCount={myPostsMessagesData.likeCount}/>)}
                </div>
            </div>
        </div>
    )
}
type MyPostsType = {
    myPostsMessagesData: myPostsMessagesDataType[]
}
export type myPostsMessagesDataType = {
    id: number
    message: string
    likeCount: number
}
