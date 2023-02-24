import {connect} from "react-redux";
import Todo from "./Todo";
import {addTODO, updateTODOText} from "../../../app/redux/todo-reducer";

const mapStateToProps = (state) => {
    return {
        newTODOText: state.todoPage.newTODOText,
        newTODO: state.todoPage.newTODO
    }
}

const TODOContainer = connect(mapStateToProps, {addTODO, updateTODOText})(Todo)

export default TODOContainer;