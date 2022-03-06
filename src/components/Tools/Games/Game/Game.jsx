import s from './Game.module.css'
import {tictacAC} from '../../../../redux/game-reducer';

const Game = (props) => {
    let ttt = (id) => {
        props.dispatch(tictacAC(id))
    }
    return (
        <div>
            <button className={s.btn} onClick={() => ttt(props.id)} id={props.id}>
                {props.name}
            </button>
        </div>
    );
};

export default Game;