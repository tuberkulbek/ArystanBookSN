import { dialogAPI } from "../request/dialog"

const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT"
const UPDATE_MESSAGE_VISIBILITY = "UPDATE_MESSAGE_VISIBILITY"

let initialState = {
    messageData: [
        {message: 'Hello, World', id: 1},
    ],
    friendData: [
        {
            name: 'Arman',
            id: 27975,
            image: "data:image/jpeg;base64,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"
        },
    ],
    isMessagesVisible: null,
    newMessageText: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let messageInfo = {
                message: state.newMessageText,
                id: state.messageData[state.messageData.length - 1].id
            }
            messageInfo.id++
            return {
                ...state,
                messageData: [...state.messageData, messageInfo],
                newMessageText: ''
            };
        }
        case UPDATE_MESSAGE_VISIBILITY: {
            return { 
                ...state,
                isMessagesVisible: action.isMessagesVisible
            }
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.NewText
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}

export const addMessage = () => ({type: ADD_MESSAGE})
export const updateMessageText = (NewText) => ({ type: UPDATE_MESSAGE_TEXT, NewText })
export const updateMessageVisibility = (isMessagesVisible) => ({type: UPDATE_MESSAGE_VISIBILITY, isMessagesVisible})

export const getDialogs = () => {
    dialogAPI.getDialogs().then(data => data)
}
export const putDialogWithUser = (userId, data) => {
    dialogAPI.getDialogWithUser(userId, data).then(data => data)
}

export default dialogReducer