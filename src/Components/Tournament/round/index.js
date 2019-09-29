
import { connect } from 'react-redux';
import { Round }  from './Round';
import * as actions from "../../../Data/actions";

const mapStateToProps = state => ({
    rounds: state.rounds,
    numOfPlayers: state.numOfPlayers,
    submitted: state.submitted,
    players: state.players, 
})

const mapDispatchToProps = dispatch => ({
	selectWinner: value => dispatch(actions.selectWinner(value)),
    submitWinners: () => dispatch(actions.submitWinners()),
    reset: () => dispatch(actions.reset()),
})

export default connect( mapStateToProps, mapDispatchToProps)(Round)
