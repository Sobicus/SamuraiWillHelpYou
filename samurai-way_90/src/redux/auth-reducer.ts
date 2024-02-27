import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppDispatch} from "./redux-store";

const SET_USER_DATA = '/auth/SET_USER_DATA'

let initialState: authStateType = {
    id: 0,
    login: '',
    email: '',
    isAuth: false
}

export const authReducer = (state: authStateType = initialState, action: ActionType): authStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number, login: string, email: string, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {id, login, email, isAuth}} as const
}
export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    const response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserDataAC(id, login, email, true))
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppDispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        await dispatch(getAuthUserDataTC())
    }
}
export const logoutTC = () => async (dispatch: AppDispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(0, '', '', false))
    }
}

type ActionType = setUserDataACType

type setUserDataACType = ReturnType<typeof setAuthUserDataAC>

export type authStateType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}