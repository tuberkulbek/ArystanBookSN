import {connect} from "react-redux";
import Friends from "./friends";

const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.friendData
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText,
        addMessage
    }
}*/

const MessagesContainer = connect(mapStateToProps, {})(Friends)

export default MessagesContainer;