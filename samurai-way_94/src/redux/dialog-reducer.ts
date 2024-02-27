import {
    ActionsType,
    DialogsPageType,
} from "./store";
export const SEND_MESSAGE = '/dialog/SEND-MESSAGE'

let initialState: DialogsPageType = {
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
}

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {...state, messagesData: [...state.messagesData, {id: 4, message: action.newMessageBody}]/*, newMessageBody: ''*/}
        }
        default:
            return state
    }
}
export const sendMessageAC = (newMessageBody: string): SendMessageActionCreatorType => {
    return {type: SEND_MESSAGE, newMessageBody}
}
export type SendMessageActionCreatorType = {
    type: '/dialog/SEND-MESSAGE'
    newMessageBody: string
}
