import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";

const Messages = (props) => {
    let newMessageElement = React.createRef();

    let message = () => {
        props.addMessage(props.newMessageText);
    };

    let updateMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateMessageText(text);
    }

    let messageElement = props.messageData.map(m => <Message message={m.message} id={m.id} />);
    return (
        <div className={s.item}>
            {messageElement}
            <div className={s.items}>
                <textarea ref={newMessageElement}
                          value={props.newMessageText}
                          onChange={updateMessageText}/>
                <button onClick={message} >send</button>
            </div>
        </div>
    );
};

export default Messages;