import Messages from "./Messages";
import {addMessage, updateMessageText} from "../../../../redux/dialog-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messageData: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText,
        addMessage
    }
}*/

const MessagesContainer = connect(mapStateToProps, {updateMessageText, addMessage})(Messages)

export default MessagesContainer;