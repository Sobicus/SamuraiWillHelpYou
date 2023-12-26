import { AddPostActionCreatorType, profileReducer, UpdateNewPostTextActionCreatorType} from "./profile-reducer";
import { dialogReducer, SendMessageActionCreatorType, UpdateNewMessageBodyActionCreatorType} from "./dialog-reducer";

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
    _callSubscriber(state) {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}
export type ActionsType =
    AddPostActionCreatorType | UpdateNewPostTextActionCreatorType |SendMessageActionCreatorType | UpdateNewMessageBodyActionCreatorType


export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: ()=>void) => void
    dispatch: (action: ActionsType) => void
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