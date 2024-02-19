import {AppDispatch} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED'

let initialAppState: initialStateType = {
    initialized: false
}

export type initialStateType = {
    initialized: boolean
}
export const appReducer = (state: initialStateType = initialAppState, action: appReducerType) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

export const initializedSuccessAC = () => {
    return {type: SET_INITIALIZED} as const
}
export const initializedAppTC = () => (dispatch: AppDispatch) => {
    let promise = dispatch(getAuthUserDataTC())
    promise.then(() => {
        dispatch(initializedSuccessAC())
    })
}
type appReducerType = ReturnType<typeof initializedSuccessAC>