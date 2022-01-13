import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import gameReducer from "./game-reducer";

let reducers = combineReducers({
    dialogPage: dialogReducer,
    postPage: profileReducer,
    gamePage: gameReducer
})

let store = createStore(reducers)

export default store