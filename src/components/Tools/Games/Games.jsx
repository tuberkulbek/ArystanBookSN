import s from './Games.module.css'
import React from "react";
import Game from "./Game/Game";
import {resetGameAC} from "../../../redux/store";

const Games = (props) => {
    let gameElement = props.gamePage.block.map( post => <Game name={post.name}
                                                     id={post.id}
                                                     dispatch={props.dispatch}/> );
    let reset = () => {
        props.dispatch(resetGameAC())
    }
    return (
        <div>
            <div>
                tic-tac-toe
            </div>
            <div className={s.items}>
                {gameElement}
            </div>
            <div>
                {props.gamePage.player}
            </div>
            <div>
                {props.gamePage.winner}
                <button onClick={reset}>
                    reset
                </button>
            </div>
        </div>

    );
};

export default Games;