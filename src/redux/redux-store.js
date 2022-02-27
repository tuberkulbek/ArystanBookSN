import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import gameReducer from "./game-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    dialogPage: dialogReducer,
    postPage: profileReducer,
    gamePage: gameReducer,
    userPage: usersReducer
})

let store = createStore(reducers)

export default store