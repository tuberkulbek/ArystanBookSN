import s from "./Game.module.css"

const Game = (props) => {
    return (
        <>
            <div>
                <button className={s.btn} onClick={() => props.tictac(props.id1)} id={props.id1}>
                    {props.name1}
                </button>
            </div>
            <div>
                <button className={s.btn} onClick={() => props.tictac(props.id2)} id={props.id2}>
                    {props.name2}
                </button>
            </div>
            <div>
                <button className={s.btn} onClick={() => props.tictac(props.id3)} id={props.id3}>
                    {props.name3}
                </button>
            </div>
            <div>
                <button className={s.btn} onClick={() => props.tictac(props.id4)} id={props.id4}>
                    {props.name4}
                </button>
            </div>
            <div>
                <button className={s.btn} onClick={() => props.tictac(props.id5)} id={props.id5}>
                    {props.name5}
                </button>
            </div>
            <div>
                <button className={s.btn} onClick={() => props.tictac(props.id6)} id={props.id6}>
                    {props.name6}
                </button>
            </div>
            <div>
                <button className={s.btn} onClick={() => props.tictac(props.id7)} id={props.id7}>
                    {props.name7}
                </button>
            </div>
            <div>
                <button className={s.btn} onClick={() => props.tictac(props.id8)} id={props.id8}>
                    {props.name8}
                </button>
            </div>
            <div>
                <button className={s.btn} onClick={() => props.tictac(props.id9)} id={props.id9}>
                    {props.name9}
                </button>
            </div>
        </>
    );
};

export default Game;