import {rerenderEntireTree} from "../render";

export let state: StateType = {
    profilePage: {
        myPostsMessagesData: [
            {id: 1, message: 'Hi, how are you?', likeCount: 15},
            {id: 2, message: 'It is my first post', likeCount: 20},
        ],
        newPostText: 'FILL ME',
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Viktoriia'},
            {id: 2, name: 'Mark'},
            {id: 3, name: 'Alina'},
            {id: 4, name: 'Maks'},
            {id: 5, name: 'Lubov'},
            {id: 6, name: 'Anatoliy'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your going?'},
            {id: 3, message: 'Good, and you?'},
        ],
    },
}
export const addPost = () => {
    const newPost: MyPostsMessagesDataType = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 7,
    }
    state.profilePage.myPostsMessagesData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    myPostsMessagesData: Array<MyPostsMessagesDataType>
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type MyPostsMessagesDataType = {
    id: number
    message: string
    likeCount: number
}