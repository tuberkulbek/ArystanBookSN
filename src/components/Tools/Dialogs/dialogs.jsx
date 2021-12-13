import s from './dialogs.module.css'
import Friends from "./Friends/friends";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={s.item}>
            <div className={s.friend}>
                <Friends dialogData={props.dialogData.friendData}/>
            </div>
            <div className={s.message}>
                <Messages messageData={props.dialogData.messageData}
                          addMessage={props.addMessage}
                          updateMessageText={props.updateMessageText}
                          newMessageText={props.dialogData.newMessageText}/>
            </div>
        </div>
    );
};

export default Dialogs;