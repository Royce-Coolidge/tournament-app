import { connect } from 'react-redux';
import { Match }  from './Match';
import * as actions from "../../../../Data/actions";

const mapStateToProps = state => ({
    rounds: state.rounds,
    numOfPlayers: state.numOfPlayers,
    submitted: state.submitted,
    players: state.players,
    winners: state.winners, 
})

const mapDispatchToProps = dispatch => ({
	selectWinner: (id, name) => dispatch(actions.selectWinner(id, name)),
    submitWinners: () => dispatch(actions.submitWinners()),
    reset: () => dispatch(actions.reset()),
})

export default connect( mapStateToProps, mapDispatchToProps)(Match)
