
import { connect } from 'react-redux';
import { Round }  from './Round';
import * as actions from "../../Data/actions";

const mapStateToProps = state => ({
    rounds: state.rounds,
    numOfPlayers: state.numOfPlayers,
    submitted: state.submitted,
    players: state.players,
    winners: state.winners, 
    roundsPlayed: state.roundsPlayed,
    totalRounds: state.totalRounds,
    final: state.final,
})

const mapDispatchToProps = dispatch => ({
	selectWinner: (id, name) => dispatch(actions.selectWinner(id, name)),
    submitWinners: () => dispatch(actions.submitWinners()),
    reset: () => dispatch(actions.reset()),
})

export default connect( mapStateToProps, mapDispatchToProps)(Round)
