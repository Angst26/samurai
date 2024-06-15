import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {reduxStore} from './redux/reduxStore'
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={reduxStore}>
                <App/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
)





