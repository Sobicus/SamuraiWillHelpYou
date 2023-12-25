import {
    ActionsType,
    ProfilePageType,
} from "./store";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState:ProfilePageType = {
    myPostsMessagesData: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It is my first post', likeCount: 20},
    ],
    newPostText: 'FILL ME',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
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
export const addPostActionCreator = (): AddPostActionCreatorType => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionCreatorType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
//export type ActionProfileType = AddPostActionCreatorType | UpdateNewPostTextActionCreatorType
// type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
// type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
export type AddPostActionCreatorType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionCreatorType = {
    type: 'UPDATE-NEW-POST-TEXT', newText: string
}
