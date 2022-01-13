import s from './Message.module.css'

let Message = (props) => {
    return (
        <div className={s.item}>
            <div className={s.item1} id={props.id}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;