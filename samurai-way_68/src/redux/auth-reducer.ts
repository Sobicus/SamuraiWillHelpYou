import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState: authStateType = {
    id: 0,
    login: '',
    email: '',
    isAuth: false
}

export const authReducer = (state: authStateType = initialState, action: ActionType): authStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number, login: string, email: string) => {
    return {type: SET_USER_DATA, data: {id, login, email}} as const
}
export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserDataAC(id, login, email))
            }
        })
}
type ActionType = setUserDataACType

type setUserDataACType = ReturnType<typeof setAuthUserDataAC>

export type authStateType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}