let PLAYER_TYPE = 'PLAYER_TYPE'
let player = 'x';
const RESET_GAME = 'RESET_GAME'

let initialState = {
    id1: 1, name1: '',
    id2: 2, name2: '',
    id3: 3, name3: '',
    id4: 4, name4: '',
    id5: 5, name5: '',
    id6: 6, name6: '',
    id7: 7, name7: '',
    id8: 8, name8: '',
    id9: 9, name9: '',
    winner: '',
    player: 'Player x turn',
}

let gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_TYPE: {
            if (state.id1===action.id){
                state.name1 = player
            } else if (state.id2===action.id){
                state.name2 = player;
            }else if (state.id3===action.id){
                state.name3 = player;
            }else if (state.id4===action.id){
                state.name4 = player;
            }else if (state.id5===action.id){
                state.name5 = player;
            }else if (state.id6===action.id){
                state.name6 = player;
            }else if (state.id7===action.id){
                state.name7 = player;
            }else if (state.id8===action.id){
                state.name8 = player;
            }else if (state.id9===action.id){
                state.name9 = player;
            }


            if (state.name1 === "x" && state.name2 === "x" && state.name3 === "x") {
                state.winner = `Player x win`
            } else if (state.name4 === "x" && state.name5 === "x" && state.name6 === "x") {
                state.winner = `Player x win`
            } else if (state.name7 === "x" && state.name8 === "x" && state.name9 === "x") {
                state.winner = `Player x win`
            } else if (state.name1 === "x" && state.name5 === "x" && state.name9 === "x") {
                state.winner = `Player x win`
            } else if (state.name3 === "x" && state.name5 === "x" && state.name7 === "x") {
                state.winner = `Player x win`
            } else if (state.name1 === "x" && state.name4 === "x" && state.name7 === "x") {
                state.winner = `Player x win`
            } else if (state.name2 === "x" && state.name5 === "x" && state.name8 === "x") {
                state.winner = `Player x win`
            } else if (state.name3 === "x" && state.name6 === "x" && state.name9 === "x") {
                state.winner = `Player x win`
            } else if (state.name1 === "0" && state.name2 === "0" && state.name3 === "0") {
                state.winner = `Player 0 win`
            } else if (state.name4 === "0" && state.name5 === "0" && state.name6 === "0") {
                state.winner = `Player 0 win`
            } else if (state.name7 === "0" && state.name8 === "0" && state.name9 === "0") {
                state.winner = `Player 0 win`
            } else if (state.name1 === "0" && state.name5 === "0" && state.name9 === "0") {
                state.winner = `Player 0 win`
            } else if (state.name3 === "0" && state.name5 === "0" && state.name7 === "0") {
                state.winner = `Player 0 win`
            } else if (state.name1 === "0" && state.name4 === "0" && state.name7 === "0") {
                state.winner = `Player 0 win`
            } else if (state.name2 === "0" && state.name5 === "0" && state.name8 === "0") {
                state.winner = `Player 0 win`
            } else if (state.name3 === "0" && state.name6 === "0" && state.name9 === "0") {
                state.winner = `Player 0 win`
            } else
                state.winner = 'TIE';

            if (player === 'x') {
                player = '0'
            } else if (player === '0') {
                player = 'x'
            }
            state.player = `Player ${player} turn`;

            return state;
        }
        case RESET_GAME: {
            return {
                ...state,
                name1: '',
                name2: '',
                name3: '',
                name4: '',
                name5: '',
                name6: '',
                name7: '',
                name8: '',
                name9: '',
                player: `Player x turn`,
                winner: ''
            }
        }
        default:{
            return {
                ...state
            };
        }
    }
}

export const tictac = (id) => ({type: PLAYER_TYPE, id})
export const resetGame = () => ({type: RESET_GAME})

export default gameReducer