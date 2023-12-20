import {
    DialogsPageType,
} from "./state";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogReducer = (state: DialogsPageType, action: ActionsDialogsType) => {
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
export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE} as const
}
export const updateNewMessageBodyActionCreator = (newMessageText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newMessageText} as const
}
export type ActionsDialogsType = sendMessageActionCreatorType | updateNewMessageBodyActionCreatorType
type sendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>
type updateNewMessageBodyActionCreatorType = ReturnType<typeof updateNewMessageBodyActionCreator>
