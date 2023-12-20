import {
    MyPostsMessagesDataType,
    ProfilePageType,
} from "./state";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const profileReducer = (state: ProfilePageType, action: ActionProfileType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: MyPostsMessagesDataType = {
                id: 3,
                message: state.newPostText,
                likeCount: 7,
            }
            state.myPostsMessagesData.push(newPost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}
export type ActionProfileType = addPostActionCreatorType | updateNewPostTextActionCreatorType
type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>