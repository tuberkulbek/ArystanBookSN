import {usersAPI} from "../API/api";

const SET_LOGIN_DATA = "SET_LOGIN_DATA"

let initialState = {
    isFetching: true,
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}

export const setLoginData = (id, email, login) => ({type: SET_LOGIN_DATA, data: {id, login, email}})
export const getIsAUTH = () => {
    return (dispatch) => {
        usersAPI.getIsAUTH().then( data=> {
            if(data.resultCode === 0){
                let {id, email, login} = data.data
                dispatch(setLoginData(id, email, login))
            }
        })
    }
}

export default authReducer
