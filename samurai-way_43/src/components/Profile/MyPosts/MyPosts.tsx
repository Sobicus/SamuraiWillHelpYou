import React from "react";
import {MyPostsMessagesDataType} from "../../../redux/store";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = (props: MyPostsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        let text = newPostElement.current!.value
        props.updateNewPostText(text)
    }
    return (
        <div className={style.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea
                            ref={newPostElement}
                            value={props.newPostText}
                            onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
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
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}