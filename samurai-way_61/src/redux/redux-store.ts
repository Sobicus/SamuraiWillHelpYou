import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        usersPage:usersReducer,
        auth: authReducer
    }
)

// type RootReducerType = typeof reducers
export type AppStateType = ReturnType< typeof reducers>

export let store = createStore(reducers)
//@ts-ignore
window.store = store