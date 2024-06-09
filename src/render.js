import React from 'react';
import App from './App';
import {addPost} from "./redux/state";
import ReactDOM from "react-dom/client";



export let rerenderEntireTree = (state) => {
    debugger;
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
    <React.StrictMode>

        <App messagesPage={state.messagesPage} profilePage={state.profilePage} sidebar={state.sidebar} addPost={addPost}/>
    </React.StrictMode>
);}

