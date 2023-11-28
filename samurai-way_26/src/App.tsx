import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from './components/Settings/Settings';


const App = () => {
    let dialogsData = [
        {id: 1, name: 'Viktoriia'},
        {id: 2, name: 'Mark'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Maks'},
        {id: 5, name: 'Lubov'},
        {id: 6, name: 'Anatoliy'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your going?'},
        {id: 3, message: 'Good, and you?'},
    ]
    let myPostsMessagesData = [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It is my first post', likeCount: 20},
    ]

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route>
                            <Profile myPostsMessagesData={myPostsMessagesData}/>
                        </Route>
                        <Route /*exact*/ path='/dialogs'>
                            <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>
                        </Route>
                        <Route>
                            <News/>
                        </Route>
                        <Route>
                            <Music/>
                        </Route>
                        <Route>
                            <Settings/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
