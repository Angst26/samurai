import './index.css';
import store from './redux/state';

import React from 'react';
import App from './App';

import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById('root'))



let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>

            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    )
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);

