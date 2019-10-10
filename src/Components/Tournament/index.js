import { connect } from 'react-redux';
import Tournament  from './Tournament';
import * as actions from "../../Data/actions";

const mapStateToProps = state => ({
    rounds: state.rounds,
    numOfPlayers: state.numOfPlayers,
    submitted: state.submitted, 
    totalRounds: state.totalRounds,
    champion: state.champion,
})

const mapDispatchToProps = dispatch => ({
	addPlayer: value => dispatch(actions.addPlayer(value)),
	createTournament: () => dispatch(actions.submit()),
})

export default connect( mapStateToProps, mapDispatchToProps)(Tournament)
