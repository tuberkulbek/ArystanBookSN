import s from './Messages.module.css';
import React, { useEffect, useState } from "react";
import Message from "./Message/Message";
import { getDialogs, putDialogWithUser } from '../../../../app/redux/dialog-reducer';

const Messages = (props) => {
    let newMessageElement = React.createRef();
    let divBottomRef = React.createRef();
    
    let messageElement = props.messageData.map(m => <Message message={m.message}
                                                             key={m.id}
                                                             id={m.id} />);

    let scrollToBottom = () => {
        divBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    console.log(props)

    let addMessage = () => {
        putDialogWithUser(props.isVisible, props.newMessageText)
        props.addMessage();
    };

    let updateMessageText = () => {
        let NewText = newMessageElement.current.value;
        props.updateMessageText(NewText);
    }
    useEffect(() => {
        scrollToBottom()
    }, [messageElement]);

    // useEffect(() => {
    //     getDialogs()
    // }, [])

    return (
        <div className={s.message_wrapper}>
            <div className={s.messageElements}>
                {messageElement}
                <div ref={divBottomRef} className={s.refDiv}>
                </div>
            </div>
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