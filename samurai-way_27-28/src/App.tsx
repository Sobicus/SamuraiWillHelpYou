import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs, DialogsDataType, MessagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from './components/Settings/Settings';
import {myPostsMessagesDataType} from "./components/Profile/MyPosts/MyPosts";


export const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile myPostsMessagesData={props.myPostsMessagesData}/>}/>
                    <Route /*exact*/ path='/dialogs'
                                     render={() => <Dialogs dialogsData={props.dialogsData}
                                                            messagesData={props.messagesData}/>}/>
                    <Route path='/news' render={() => News}/>
                    <Route path='/music' render={() => Music}/>
                    <Route path='/settings' render={() => Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
type AppType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    myPostsMessagesData: Array<myPostsMessagesDataType>
}