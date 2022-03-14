import s from './dialogs.module.css'
import MessagesContainer from "./Messages/MessagesContainer";
import FriendsContainer from "./Friends/FriendsContainer";

const Dialogs = (props) => {
    return (
        <div className={s.item}>
            <div className={s.friend}>
                <FriendsContainer/>
            </div>
            <div>
                <MessagesContainer/>
            </div>
        </div>
    );
};

export default Dialogs;