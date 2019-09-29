
import { connect } from 'react-redux';
import { Round }  from './Round';
import * as actions from "../../../Data/actions";

const mapStateToProps = state => ({
    rounds: state.rounds,
    numOfPlayers: state.numOfPlayers,
    submitted: state.submitted, 
})

const mapDispatchToProps = dispatch => ({
	addPlayer: value => dispatch(actions.addPlayer(value)),
    createTournament: () => dispatch(actions.submit()),
    reset: () => dispatch(actions.reset()),
})

export default connect( mapStateToProps, mapDispatchToProps)(Round)
