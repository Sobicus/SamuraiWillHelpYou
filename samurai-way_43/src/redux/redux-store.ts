import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {StoreType} from "./store";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer
    }
)

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

export let store:StoreType = createStore(reducers)