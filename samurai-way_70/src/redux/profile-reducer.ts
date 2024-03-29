import {
    ProfilePageType, ProfileType,
} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    newPostText: 'FILL ME',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 7,
            }
            return {...state, myPostsMessagesData: [...state.myPostsMessagesData, newPost], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export const addPostAC = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}
export const setUserProfileAC = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const getUserProfileTC=(userId:string)=>(dispatch:Dispatch)=>{
    profileAPI.getProfileById(userId)
        .then(data => {
            dispatch(setUserProfileAC(data))
        })
}
//export type ActionProfileType = AddPostActionCreatorType | UpdateNewPostTextActionCreatorType
// type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
// type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
export type AddPostAC = ReturnType<typeof addPostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
type ActionsType = AddPostAC | UpdateNewPostTextACType | setUserProfileACType