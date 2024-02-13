import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import {appReducer} from "./app-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        usersPage:usersReducer,
        auth: authReducer,
        app:appReducer
    }
)

// type RootReducerType = typeof reducers
export type AppStateType = ReturnType< typeof reducers>
export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export let store = createStore(reducers, applyMiddleware(thunk))
//@ts-ignore
window.store = store