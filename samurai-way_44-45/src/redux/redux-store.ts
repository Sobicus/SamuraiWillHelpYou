import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {StoreType} from "./store";

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer
    }
)

// type RootReducerType = typeof reducers
// export type AppStateType = ReturnType<RootReducerType>
export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)