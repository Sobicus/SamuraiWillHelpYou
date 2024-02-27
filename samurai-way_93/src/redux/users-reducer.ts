import {AxiosResponse} from "axios";
import {Dispatch} from "redux";
import {FollowUnfollowType, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/validators/object-helpers";

const FOLLOW = '/users/FOLLOW'
const UNFOLLOW = '/users/UNFOLLOW'
const SET_USERS = '/users/SET_USERS'
const SET_CURRENT_PAGE = '/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = '/users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = '/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = '/users/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: updateObjectInArray(state.users, 'id', action.userId, {followed: true})}
            // return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: updateObjectInArray(state.users, 'id', action.userId, {followed: false})}
            //return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {type: FOLLOW, userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setUsersTotalCountAC(data.totalCount))
}
const followUnfollowFlow = async (
    dispatch: Dispatch,
    userId: number,
    apiMethod: (userId: number) => Promise<AxiosResponse<FollowUnfollowType>>,
    actionCreator: (userId: number) => followACType
        | unfollowACType) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgressAC(false, userId))
}
export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI)
    let actionCreator = followAC
    await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    /*
        dispatch(toggleIsFollowingProgressAC(true, userId))
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleIsFollowingProgressAC(false, userId))
        */

}
export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI)
    let actionCreator = unfollowAC
    await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    /*
        dispatch(toggleIsFollowingProgressAC(true, userId))
        const response = await apiMethod(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleIsFollowingProgressAC(false, userId))

     */
}

type ActionType = followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | toggleIsFetchingACType
    | toggleIsFollowingProgressACType
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
type toggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgressAC>

type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: string,
    large: string
}