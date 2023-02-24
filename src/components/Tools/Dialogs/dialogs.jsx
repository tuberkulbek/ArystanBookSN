import s from './dialogs.module.css'
import MessagesContainer from "./Messages/MessagesContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import {useSelector} from "react-redux";

const Dialogs = () => {
    const isVisible = useSelector((state) => state.dialogPage.isMessagesVisible)

    return (
        <div className={s.item}>
            <FriendsContainer />
            {isVisible && <MessagesContainer isVisible={isVisible} />}
        </div>
    );
};

export default Dialogs;