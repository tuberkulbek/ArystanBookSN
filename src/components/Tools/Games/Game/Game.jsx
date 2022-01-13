import s from './Game.module.css'
import {tictacAC} from "../../../../redux/store";

const Game = (props) => {
    let ttt = (id) => {
        props.dispatch(tictacAC(id))
    }
    let switchPlayer = (player) => {

    }
    return (
        <div>
            <button className={s.btn} onClick={() => ttt(props.id)} onChange={()=> switchPlayer(props.name)} id={props.id}>
                {props.name}
            </button>
        </div>
    );
};

export default Game;