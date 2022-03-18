const ADD_TODO = "ADD_TODO"
const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT"

let initialState = {
    newTODO: [
        {TODO: '', id: 0}
    ],
    newTODOText: '',
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            let TODOInfo = {
                TODO: state.newTODOText,
                id: state.newTODO[state.newTODO.length - 1].id
            }
            TODOInfo.id++
            return {
                ...state,
                newTODO: [...state.newTODO, TODOInfo],
                newTODOText: ''
            };
        }
        case UPDATE_TODO_TEXT: {
            return {
                ...state,
                newTODOText: action.NewText
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}

export const addTODO = () => ({type: ADD_TODO})
export const updateTODOText = (NewText) => ({type: UPDATE_TODO_TEXT, NewText})

export default todoReducer