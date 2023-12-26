import './index.css';
import ReactDOM from "react-dom";
import {App} from "./App";
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import {AppStateType, store} from './redux/redux-store';
import {Provider} from "react-redux";
import {StateType} from './redux/store';
import {Store} from 'redux';

// let rerenderEntireTree = (state: StateType) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store as Store<AppStateType>}>
//                 <App/>
//             </Provider>
//         </BrowserRouter>,
//         document.getElementById('root')
//     )
// }
//
// rerenderEntireTree(store.getState())
// store.subscribe(() => {
//     let state = store.getState()//wtf doesn't work
//     rerenderEntireTree(state)
// })
//******************************
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
//*********************************
