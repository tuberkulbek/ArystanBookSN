import './Todo.css'
import React from "react";
import TodoMINI from "./TodoMINI";

const Todo = (props) => {
    let newTODOElement = React.createRef();

    let addTODO = () => {
        props.addTODO();
    };

    let updateTodoText = () => {
        let NewText = newTODOElement.current.value;
        props.updateTODOText(NewText);
    }

    let todoElement = props.newTODO.map(m => <TodoMINI TODO={m.TODO}
                                                             key={m.id}
                                                             id={m.id} />);

    return (
        <div className={"testing"}>
            TODO
            <textarea ref={newTODOElement}
                      value={props.newTODOText}
                      onChange={updateTodoText}/>
            <button onClick={addTODO}>
                0
            </button>
            {todoElement}
        </div>
    );
};

export default Todo;