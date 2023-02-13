import {AUTHmeAPI} from "../API/api";

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
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}

export const setLoginData = (id, email, login, isAuth ) => ({type: SET_LOGIN_DATA, data: {id, login, email, isAuth}})
export const getIsAUTH = () => {
    return (dispatch) => {
        AUTHmeAPI.getIsAUTH().then( data=> {
            if(data.resultCode === 0){
                let {id, email, login} = data.data
                dispatch(setLoginData(id, email, login, true))
            }
        })
    }
}
export const postLogInData = (data) => {
    return (dispatch) => {
        AUTHmeAPI.logIn(data).then(e => {
            console.log(e)
            if (e.resultCode === 0) {
                AUTHmeAPI.getIsAUTH().then( data=> {
                    if (data.resultCode === 0) {
                        let { id, email, login } = data.data
                        dispatch(setLoginData(id, email, login, true))
                    }
                })
            }
        })
    }
}
export const deletetLogInData = (data) => {
    return (dispatch) => {
        AUTHmeAPI.logOut(data).then(data => {
            if(data.resultCode === 0){
                dispatch(setLoginData(null, null, null, false))
            }
        })
    }
}

export default authReducer
