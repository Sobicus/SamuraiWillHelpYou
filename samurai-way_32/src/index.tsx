import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state} from "./redux/state";
//
// let dialogsData: DialogsDataType[] = [
//     {id: 1, name: 'Viktoriia'},
//     {id: 2, name: 'Mark'},
//     {id: 3, name: 'Alina'},
//     {id: 4, name: 'Maks'},
//     {id: 5, name: 'Lubov'},
//     {id: 6, name: 'Anatoliy'},
// ]
// let messagesData: MessagesDataType[] = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How is your going?'},
//     {id: 3, message: 'Good, and you?'},
// ]
// let myPostsMessagesData: MyPostsMessagesDataType[] = [
//     {id: 1, message: 'Hi, how are you?', likeCount: 15},
//     {id: 2, message: 'It is my first post', likeCount: 20},
// ]

ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);
