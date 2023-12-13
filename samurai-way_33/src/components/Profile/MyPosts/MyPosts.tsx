import React from "react";
import {MyPostsMessagesDataType} from "../../../redux/state";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props: MyPostsType) => {
    const {myPostsMessagesData} = props
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let text = newPostElement.current!.value
        props.addPost(text)
        newPostElement.current!.value = ''
    }
    return (
        <div className={style.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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
    myPostsMessagesData: MyPostsMessagesDataType[]
    addPost: (postMessage: string) => void
}