import Messages from "./Messages";
import {addMessageAC, updateMessageTextAC} from "../../../../redux/dialog-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messageData: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (NewText)=>{
            let action = updateMessageTextAC(NewText)
            dispatch(action);
        },
        addMessage: ()=>{
            dispatch(addMessageAC())
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;