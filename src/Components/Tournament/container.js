import { connect } from 'react-redux';
import { Tournament } from './Tournament';
//import { actions } from '../../Data';

const mapStateToProps = state => ({
    players: state.players,
    numOfPlayers: state.numOfPlayers,
    submitted: state.submitted, 
})

const mapDispatchToProps = dispatch => ({
    
})

export const TournamentConnected = connect( mapStateToProps, mapDispatchToProps)(Tournament)
