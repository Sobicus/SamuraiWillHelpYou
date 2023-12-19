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

   /* addPost() {
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
    },*/
    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            const newPost: MyPostsMessagesDataType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 7,
            }
            this._state.profilePage.myPostsMessagesData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

type StoreType = {
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