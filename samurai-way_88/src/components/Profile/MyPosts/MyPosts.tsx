import React from "react";
import {MyPostsMessagesDataType} from "../../../redux/store";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Field, Formik} from "formik";


export const MyPosts = React.memo((props: MyPostsType) => {
    const addNewPost = (newPostText: string) => {
        props.addPost(newPostText)
    }
    return (
        <div className={style.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <AddPostForm addNewPost={addNewPost}/>
                </div>
                <div className={style.posts}>
                    {props.myPostsMessagesData.map((myPostsMessagesData) => <Post
                        message={myPostsMessagesData.message}
                        likeCount={myPostsMessagesData.likeCount}/>)}
                </div>
            </div>
        </div>
    )
})

//------------------------class component------------
// export class MyPosts extends React.PureComponent<MyPostsType> {
//     /*
//     shouldComponentUpdate(nextProps: Readonly<MyPostsType>, nextState: Readonly<{}>, nextContext: any): boolean {
//         return nextProps !== this.props || nextState !== this.state
//     }
//     */
//     render() {
//         const addNewPost = (newPostText: string) => {
//             this.props.addPost(newPostText)
//         }
//         return (
//             <div className={style.content}>
//                 <div>
//                     <h3>My Posts</h3>
//                     <div>
//                         <AddPostForm addNewPost={addNewPost}/>
//                     </div>
//                     <div className={style.posts}>
//                         {this.props.myPostsMessagesData.map((myPostsMessagesData) => <Post
//                             message={myPostsMessagesData.message}
//                             likeCount={myPostsMessagesData.likeCount}/>)}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//---------------------------------------------------
const AddPostForm = (props: AddPostFormType) => {
    return (
        <div>
            <Formik
                initialValues={{
                    newText: '',
                }}
                onSubmit={(values, {setSubmitting}) => {
                    props.addNewPost(values.newText)
                    //values.newText = ''
                    setSubmitting(false)
                }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            as={'textarea'}
                            type="newText"
                            name="newText"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.newText}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
type AddPostFormType = {
    addNewPost: (newPostText: string) => void
}
type MyPostsType = {
    myPostsMessagesData: MyPostsMessagesDataType[]
    addPost: (newPostText: string) => void
}