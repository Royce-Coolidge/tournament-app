import { connect } from 'react-redux';
import Form from './Form';
import { actions } from '../../../Data';

const mapStateToProps = state => ({
    playerName: state.playerName,
    players: state.players,
    numOfPlayers: state.numOfPlayers,
    submitted: state.submitted, 
})

const mapDispatchToProps = dispatch => ({
    addPlayer: value => dispatch(actions.addPlayer(value)),
    createTournament: () => dispatch(actions.submit()),
    reset: () => dispatch(actions.reset()),
})

export default connect( mapStateToProps, mapDispatchToProps)(Form)
