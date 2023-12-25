import {
    ActionsType,
    DialogsPageType,
} from "./state";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.newMessageText
            return state
        }
        case SEND_MESSAGE: {
            const body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({id: 4, message: body})
            return state
        }
        default:
            return state
    }
}
export const sendMessageActionCreator = ():SendMessageActionCreatorType => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyActionCreator = (newMessageText: string):UpdateNewMessageBodyActionCreatorType => {
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
