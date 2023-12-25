import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { MyPostsMessagesDataType} from "../../../redux/store";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = (props: MyPostsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current!.value))
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
    newPostText: string
    dispatch: (action: any) => void
}