import {AUTHmeAPI, LoginDataTypes, ResponeAuthType} from "../request/auth/index";
import { AppDispatch } from "./redux-store";

const SET_LOGIN_DATA = "SET_LOGIN_DATA"
const SET_IS_AUTH = "SET_IS_AUTH"

let initialState = {
    isFetching: true,
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: {
    isAuth: boolean; type: string; data: LoginDataTypes; 
}) => {
    switch (action.type) {
        case SET_LOGIN_DATA: {
            return {
                ...state,
                ...action.data,
            };
        }
        case SET_IS_AUTH: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default: {
            return {
                ...state
            };
        }
    }
}

export const setLoginData = ({ id, email, login }: LoginDataTypes) => ({ type: SET_LOGIN_DATA, data: { id, login, email } })
export const setIsAuth = (isAuth: boolean) => ({type: SET_IS_AUTH, isAuth})
export const getIsAUTH = () => {
    return (dispatch: AppDispatch) => {
        AUTHmeAPI.getIsAUTH().then( (data: ResponeAuthType<LoginDataTypes>) => {
            if(data.resultCode === 0){
                dispatch(setLoginData(data.data))
                dispatch(setIsAuth(true))
            }
        })
    }
}
export const postLogInData = (data: LoginDataTypes) => {
    return (dispatch: AppDispatch) => {
        AUTHmeAPI.logIn(data).then((e: ResponeAuthType<{}>) => {
            if (e.resultCode === 0) {
                AUTHmeAPI.getIsAUTH().then( (data: ResponeAuthType<LoginDataTypes>)=> {
                    if (data.resultCode === 0) {
                        dispatch(setLoginData(data.data))
                    }
                })
            }
        })
    }
}
export const deletetLogInData = () => {
    return (dispatch: AppDispatch) => {
        AUTHmeAPI.logOut().then((data: ResponeAuthType<{}>) => {
            if(data.resultCode === 0){
                dispatch(setLoginData({id: null, email:"", login: ""}))
            }
        })
    }
}

export default authReducer
