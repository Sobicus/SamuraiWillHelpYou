import {ActionProfileType, ADD_POST, profileReducer, UPDATE_NEW_POST_TEXT} from "./profile-reducer";
import {ActionsDialogsType, dialogReducer, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialog-reducer";

export let store: StoreType = {
    _state: {
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
            newMessageBody: '',
        },
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}
type ActionsType =
    ActionsDialogsType
    | ActionProfileType


export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    /* addPost: () => void
     updateNewPostText: (newText: string) => void*/
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
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
    newMessageBody: string
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