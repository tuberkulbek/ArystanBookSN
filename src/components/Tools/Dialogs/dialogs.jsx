import s from './dialogs.module.css'
import Friends from "./Friends/friends";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
    return (
        <div className={s.item}>
            <div className={s.friend}>
                <Friends dialogData={props.dialogData}/>/>
            </div>
            <div>
                <MessagesContainer/>
            </div>
        </div>
    );
};

export default Dialogs;