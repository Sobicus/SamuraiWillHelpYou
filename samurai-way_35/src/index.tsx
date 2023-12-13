import './index.css';
import {addPost, state, StateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {App} from "./App";
import React from "react";

let rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)

