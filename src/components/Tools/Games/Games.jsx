import s from './Games.module.css'
import React from "react";
import Game from "./Game/Game";

const Games = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                tic-tac-toe
            </div>
            <div className={s.items}>
                <Game name1={props.name1}
                      name2={props.name2}
                      name3={props.name3}
                      name4={props.name4}
                      name5={props.name5}
                      name6={props.name6}
                      name7={props.name7}
                      name8={props.name8}
                      name9={props.name9}
                      id1={props.id1}
                      id2={props.id2}
                      id3={props.id3}
                      id4={props.id4}
                      id5={props.id5}
                      id6={props.id6}
                      id7={props.id7}
                      id8={props.id8}
                      id9={props.id9}
                      tictac={props.tictac}/>
            </div>
            <div>
                {props.player}
            </div>
            <div>
                {props.winner}
                <button onClick={props.resetGame}>
                    reset
                </button>
            </div>
        </div>

    );
};

export default Games;