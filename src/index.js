import './index.css';
import React from "react";
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";

let rerender = (state) => ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
rerender(store.getState());
store.newRenderTree(rerender);

reportWebVitals();