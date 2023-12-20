import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from './components/Settings/Settings';
import {StateType, StoreType} from './redux/state';


export const App = (props: AppType) => {
    const state = props.store.getState()
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        profilePage={state.profilePage}
                        dispatch={props.dispatch}
                    />}/>
                    <Route /*exact*/ path='/dialogs'
                                     render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
    );
}
type AppType = {
    dispatch: (action: any) => void
    store:StoreType
}