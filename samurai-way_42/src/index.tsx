import './index.css';
import ReactDOM from "react-dom";
import {App} from "./App";
import React from "react";
import {StateType, store} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = (/*state: StateType*/) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(/*store.getState()*/)
store.subscribe(rerenderEntireTree)

