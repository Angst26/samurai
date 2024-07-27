import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {reduxStore} from './redux/reduxStore'
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#197fd2',
        },
        secondary: {
            main: '#dc007d',
        },
        status: {
            main: '#197fd2' // Добавление цвета статуса
        },
        background: {
            default: 'rgba(255,255,255,0.87)', // Цвет фона по умолчанию
            paper: '#d5d5d5',   // Цвет фона для бумаги (карточек)
        },
    },
});


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={reduxStore}>
                    <App/>
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)

window.reduxState = reduxStore





