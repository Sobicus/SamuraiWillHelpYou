import {
    ProfilePageType, ProfileType,
} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export const ADD_POST = '/profile/ADD-POST'
export const DELETE_POST = '/profile/DELETE-POST'
export const SET_USER_PROFILE = '/profile/SET_USER_PROFILE'
export const SET_STATUS = '/profile/SET_STATUS'

let initialState: ProfilePageType = {
    myPostsMessagesData: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It is my first post', likeCount: 20},
    ],
    profile: {
        "aboutMe": "",
        "contacts": {
            "facebook": "",
            "website": "",
            "vk": "",
            "twitter": "",
            "instagram": "",
            "youtube": "",
            "github": "",
            "mainLink": ""
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "",
        "fullName": "",
        "userId": 3,
        "photos": {
            "small": "",
            "large": ""
        }
    },
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 3,
                message: action.newPostText,
                likeCount: 7,
            }
            return {...state, myPostsMessagesData: [newPost, ...state.myPostsMessagesData]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, myPostsMessagesData: state.myPostsMessagesData.filter(p => p.id !== action.postId)}
        }
        default:
            return state
    }
}
export const addPostAC = (newPostText: string) => {
    return {type: ADD_POST, newPostText} as const
}
export const deletePostAC = (postId: number) => {
    return {type: DELETE_POST, postId} as const
}
export const setUserProfileAC = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const setStatusAC = (status: string) => {
    return {type: SET_STATUS, status} as const
}
export const getUserProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getProfileById(userId)
    dispatch(setUserProfileAC(data))
}
export const getStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))

}
export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0)
        dispatch(setStatusAC(status))
}
export type AddPostAC = ReturnType<typeof addPostAC>
export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export type setStatusACType = ReturnType<typeof setStatusAC>
export type deletePostACType = ReturnType<typeof deletePostAC>
type ActionsType = AddPostAC | setUserProfileACType | setStatusACType | deletePostACType