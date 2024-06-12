import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {reduxStore} from './redux/reduxStore'
//import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'))


let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={reduxStore.dispatch}/>
            </React.StrictMode>
        </BrowserRouter>
    )
}
rerenderEntireTree(reduxStore.getState())

reduxStore.subscribe(() => {
    let store = reduxStore.getState();
    rerenderEntireTree(store);
});

