export let store:StoreType = {
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
        },
    },
    getState(){
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },
    addPost() {
        const newPost: MyPostsMessagesDataType = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 7,
        }
        this._state.profilePage.myPostsMessagesData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
}
// let rerenderEntireTree = (state: StateType) => {
//     console.log('State changed')
// }
// export let state: StateType = {
//     profilePage: {
//         myPostsMessagesData: [
//             {id: 1, message: 'Hi, how are you?', likeCount: 15},
//             {id: 2, message: 'It is my first post', likeCount: 20},
//         ],
//         newPostText: 'FILL ME',
//     },
//     dialogsPage: {
//         dialogsData: [
//             {id: 1, name: 'Viktoriia'},
//             {id: 2, name: 'Mark'},
//             {id: 3, name: 'Alina'},
//             {id: 4, name: 'Maks'},
//             {id: 5, name: 'Lubov'},
//             {id: 6, name: 'Anatoliy'},
//         ],
//         messagesData: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your going?'},
//             {id: 3, message: 'Good, and you?'},
//         ],
//     },
// }
// export const addPost = () => {
//     const newPost: MyPostsMessagesDataType = {
//         id: 3,
//         message: state.profilePage.newPostText,
//         likeCount: 7,
//     }
//     state.profilePage.myPostsMessagesData.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }
// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer
// }
type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void

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