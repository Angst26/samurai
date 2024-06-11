import './index.css';
import store from './redux/state';
import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderEntireTree = (state) => {

    root.render(
        <BrowserRouter>
            <React.StrictMode>

                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>

    )
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);

