import {connect} from "react-redux";
import Games from "./Games";
import {resetGame, tictac} from "../../../app/redux/game-reducer";

const mapStateToProps = (state) => {
    return {
        id1: state.gamePage.id1,
        id2: state.gamePage.id2,
        id3: state.gamePage.id3,
        id4: state.gamePage.id4,
        id5: state.gamePage.id5,
        id6: state.gamePage.id6,
        id7: state.gamePage.id7,
        id8: state.gamePage.id8,
        id9: state.gamePage.id9,
        name1: state.gamePage.name1,
        name2: state.gamePage.name2,
        name3: state.gamePage.name3,
        name4: state.gamePage.name4,
        name5: state.gamePage.name5,
        name6: state.gamePage.name6,
        name7: state.gamePage.name7,
        name8: state.gamePage.name8,
        name9: state.gamePage.name9,
        winner: state.gamePage.winner,
        player: state.gamePage.player
    }
}

export default connect(mapStateToProps, {
    tictac,
    resetGame
})(Games)