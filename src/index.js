import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

ReactDOM.render(
    // <React>
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>,
    // </React>,
    document.getElementById('root')
);