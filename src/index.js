import './index.css';
import state, {subscribe} from './redux/state';

import React from 'react';
import App from './App';
import {addPost} from "./redux/state";
import {changeNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'))


let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>

            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText} />
        </React.StrictMode>
    )
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree);

