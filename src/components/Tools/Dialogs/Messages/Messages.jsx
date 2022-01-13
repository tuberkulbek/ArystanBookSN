import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../../../redux/store";

const Messages = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageAC());
    };

    let updateMessageText = () => {
        let NewText = newMessageElement.current.value;
        let action = updateMessageTextAC(NewText)
        props.dispatch(action);
    }

    let messageElement = props.messageData.map(m => <Message message={m.message} id={m.id} />);
    return (
        <div className={s.item}>
            {messageElement}
            <div className={s.items}>
                <textarea ref={newMessageElement}
                          value={props.newMessageText}
                          onChange={updateMessageText}/>
                <button onClick={addMessage} >send</button>
            </div>
        </div>
    );
};

export default Messages;