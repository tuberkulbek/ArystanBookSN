// eslint-disable-next-line no-unused-vars
let playerType = 'playerType'
let player = 'x';
const resetGame = 'resetGame'

let initialState = {
    block: [
        {id: 1, name: ''},
        {id: 2, name: ''},
        {id: 3, name: ''},
        {id: 4, name: ''},
        {id: 5, name: ''},
        {id: 6, name: ''},
        {id: 7, name: ''},
        {id: 8, name: ''},
        {id: 9, name: ''}
    ],
    winner: '',
    player: 'Player x turn',
}

let gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case playerType: {
            let winPos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            // eslint-disable-next-line no-unused-vars
            let stateCopy = {...state}
            stateCopy.block = [...state.block]
            const element = stateCopy.block.find((item) => item.id === action.id);
            element.name = player;
            let i = 0
            if (stateCopy.block[winPos[i][i]].name === "x" && stateCopy.block[winPos[i][i + 1]].name === "x" && stateCopy.block[winPos[i][i + 2]].name === "x") {
                stateCopy.winner = `Player x win`
            } else if (stateCopy.block[winPos[i + 1][i]].name === "x" && stateCopy.block[winPos[i + 1][i + 1]].name === "x" && stateCopy.block[winPos[i + 1][i + 2]].name === "x") {
                stateCopy.winner = `Player x win`
            } else if (stateCopy.block[winPos[i + 2][i]].name === "x" && stateCopy.block[winPos[i + 2][i + 1]].name === "x" && stateCopy.block[winPos[i + 2][i + 2]].name === "x") {
                stateCopy.winner = `Player x win`
            } else if (stateCopy.block[winPos[i + 3][i]].name === "x" && stateCopy.block[winPos[i + 3][i + 1]].name === "x" && stateCopy.block[winPos[i + 3][i + 2]].name === "x") {
                stateCopy.winner = `Player x win`
            } else if (stateCopy.block[winPos[i + 4][i]].name === "x" && stateCopy.block[winPos[i + 4][i + 1]].name === "x" && stateCopy.block[winPos[i + 4][i + 2]].name === "x") {
                stateCopy.winner = `Player x win`
            } else if (stateCopy.block[winPos[i + 5][i]].name === "x" && stateCopy.block[winPos[i + 5][i + 1]].name === "x" && stateCopy.block[winPos[i + 5][i + 2]].name === "x") {
                stateCopy.winner = `Player x win`
            } else if (stateCopy.block[winPos[i + 6][i]].name === "x" && stateCopy.block[winPos[i + 6][i + 1]].name === "x" && stateCopy.block[winPos[i + 6][i + 2]].name === "x") {
                stateCopy.winner = `Player x win`
            } else if (stateCopy.block[winPos[i + 7][i]].name === "x" && stateCopy.block[winPos[i + 7][i + 1]].name === "x" && stateCopy.block[winPos[i + 7][i + 2]].name === "x") {
                stateCopy.winner = `Player x win`
            } else if (stateCopy.block[winPos[i][i]].name === "0" && stateCopy.block[winPos[i][i + 1]].name === "0" && stateCopy.block[winPos[i][i + 2]].name === "0") {
                stateCopy.winner = `Player 0 win`
            } else if (stateCopy.block[winPos[i + 1][i]].name === "0" && stateCopy.block[winPos[i + 1][i + 1]].name === "0" && stateCopy.block[winPos[i + 1][i + 2]].name === "0") {
                stateCopy.winner = `Player 0 win`
            } else if (stateCopy.block[winPos[i + 2][i]].name === "0" && stateCopy.block[winPos[i + 2][i + 1]].name === "0" && stateCopy.block[winPos[i + 2][i + 2]].name === "0") {
                stateCopy.winner = `Player 0 win`
            } else if (stateCopy.block[winPos[i + 3][i]].name === "0" && stateCopy.block[winPos[i + 3][i + 1]].name === "0" && stateCopy.block[winPos[i + 3][i + 2]].name === "0") {
                stateCopy.winner = `Player 0 win`
            } else if (stateCopy.block[winPos[i + 4][i]].name === "0" && stateCopy.block[winPos[i + 4][i + 1]].name === "0" && stateCopy.block[winPos[i + 4][i + 2]].name === "0") {
                stateCopy.winner = `Player 0 win`
            } else if (stateCopy.block[winPos[i + 5][i]].name === "0" && stateCopy.block[winPos[i + 5][i + 1]].name === "0" && stateCopy.block[winPos[i + 5][i + 2]].name === "0") {
                stateCopy.winner = `Player 0 win`
            } else if (stateCopy.block[winPos[i + 6][i]].name === "0" && stateCopy.block[winPos[i + 6][i + 1]].name === "0" && stateCopy.block[winPos[i + 6][i + 2]].name === "0") {
                stateCopy.winner = `Player 0 win`
            } else if (stateCopy.block[winPos[i + 7][i]].name === "0" && stateCopy.block[winPos[i + 7][i + 1]].name === "0" && stateCopy.block[winPos[i + 7][i + 2]].name === "0") {
                stateCopy.winner = `Player 0 win`
            } else
                stateCopy.winner = 'TIE'
            if (player === 'x') {
                player = '0'
            } else if (player === '0') {
                player = 'x'
            }
            stateCopy.player = `Player ${player} turn`;
            return stateCopy;
        }
        case resetGame: {
            let stateCopy = {...state};
            stateCopy.block = [...state.block]
            for (let i = 0; i < 9; i++) {
                stateCopy.block[i].name = ''
            }
            stateCopy.player = `Player x turn`
            stateCopy.winner = ''
            return stateCopy;
        }
        default:{
            let stateCopy = {...state};
            return stateCopy;
        }
    }
}

export const tictacAC = (id) => ({type: playerType, id: id})
export const resetGameAC = () => ({type: resetGame})

export default gameReducer