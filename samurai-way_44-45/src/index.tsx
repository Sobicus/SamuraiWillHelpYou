import './index.css';
import ReactDOM from "react-dom";
import {App} from "./App";
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';
import {Provider} from "react-redux";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree()
store.subscribe(() => {
    let state = store.getState()//wtf doesn't work
    rerenderEntireTree()
})

