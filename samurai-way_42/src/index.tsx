import './index.css';
import ReactDOM from "react-dom";
import {App} from "./App";
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';
import {StateType} from "./redux/store";

let rerenderEntireTree = (state: StateType) => {
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

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()//wtf doesn't work
    rerenderEntireTree(state)
})

