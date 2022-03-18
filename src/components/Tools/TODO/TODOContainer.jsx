import {connect} from "react-redux";
import Todo from "./Todo";
import {addTODO, updateTODOText} from "../../../redux/todo-reducer";

const mapStateToProps = (state) => {
    return {
        newTODOText: state.todoPage.newTODOText,
        newTODO: state.todoPage.newTODO
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText,
        addMessage
    }
}*/

const TODOContainer = connect(mapStateToProps, {addTODO, updateTODOText})(Todo)

export default TODOContainer;