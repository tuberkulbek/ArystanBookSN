import s from './Messages.module.css';
import React from "react";
import Message from "./Message/Message";

const Messages = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let updateMessageText = () => {
        let NewText = newMessageElement.current.value;
        props.updateMessageText(NewText);
    }

    let messageElement = props.messageData.map(m => <Message message={m.message}
                                                             key={m.id}
                                                             id={m.id} />);

    return (
        <div className={s.item}>
            {messageElement}
            <div className={s.items}>
                <textarea ref={newMessageElement}
                          value={props.newMessageText}
                          onChange={updateMessageText}/>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
};

export default Messages;