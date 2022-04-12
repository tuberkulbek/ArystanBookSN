import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import gameReducer from "./game-reducer";
import usersReducer from "./users-reducer";
import todoReducer from "./todo-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    gamePage: gameReducer,
    todoPage: todoReducer,
    userPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(ThunkMiddleware))

window.store = store

export default store