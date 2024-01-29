import {
    ActionsType,
    DialogsPageType,
} from "./store";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'

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
    newMessageBody: '',
}

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            // state.newMessageBody = action.newMessageText
            // return state
            return {...state, newMessageBody: action.newMessageText}
        }
        case SEND_MESSAGE: {
            // const body = state.newMessageBody
            // state.newMessageBody = ''
            // state.messagesData.push({id: 4, message: body})
            // return state
            return {...state, messagesData: [...state.messagesData, {id: 4, message: state.newMessageBody}], newMessageBody: ''}
        }
        default:
            return state
    }
}
export const sendMessageAC = (): SendMessageActionCreatorType => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyAC = (newMessageText: string): UpdateNewMessageBodyActionCreatorType => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newMessageText}
}
//export type ActionsDialogsType = SendMessageActionCreatorType | UpdateNewMessageBodyActionCreatorType
// type sendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>
// type updateNewMessageBodyActionCreatorType = ReturnType<typeof updateNewMessageBodyActionCreator>
export type SendMessageActionCreatorType = {
    type: 'SEND-MESSAGE'
}
export type UpdateNewMessageBodyActionCreatorType = {
    type: 'UPDATE-NEW-MESSAGE-BODY', newMessageText: string
}
