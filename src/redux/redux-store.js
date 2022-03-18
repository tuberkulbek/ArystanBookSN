import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import gameReducer from "./game-reducer";
import usersReducer from "./users-reducer";
import todoReducer from "./todo-reducer";

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    gamePage: gameReducer,
    todoPage: todoReducer,
    userPage: usersReducer
})

let store = createStore(reducers)

export default store