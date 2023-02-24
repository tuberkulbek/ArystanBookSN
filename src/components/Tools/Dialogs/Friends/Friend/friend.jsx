import { useDispatch } from 'react-redux';
import { updateMessageVisibility } from '../../../../../app/redux/dialog-reducer';
import s from './friend.module.css'

const Friend = (props) => {
    const dispatch = useDispatch();
    console.log(props.id)
    const handleClickVisibleMassage = () => {
        dispatch(updateMessageVisibility(props.id))
    }

    return (
        <nav className={s.item}>
            <div>
                <img src={props.image} alt={`Avatar${props.id}`}/>
            </div>
            <div className={s.nav}>
                <div
                    onClick={handleClickVisibleMassage}
                    className={s.item1}>{props.name}</div>
            </div>
        </nav>
    );
};

export default Friend;