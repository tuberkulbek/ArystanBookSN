import s from './friends.module.css'
import Friend from "./Friend/friend";

const Friends = (props) => {
    let friendElement = props.dialogData.map(f => <Friend name={f.name}
                                                          id={f.id}
                                                          key={f.id}
                                                          setIsVisible={props.setIsVisible}
                                                          image={f.image} />)
    return (
        <div className={s.items}>
            {friendElement}
        </div>
    );
};

export default Friends;