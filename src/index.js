import './index.css';
import React from "react";
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, newRenderTree, updateMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerender = () => ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateMessageText={updateMessageText}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
rerender(state);
newRenderTree(rerender);

reportWebVitals();