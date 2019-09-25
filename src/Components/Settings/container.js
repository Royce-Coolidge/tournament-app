import { connect } from 'react-redux'
import { Settings } from './Settings'
import { actions } from '../../Data'

const mapStateToProps = state => ({
    playerName: state.playerName,
    players: state.players,
    numOfPlayers: state.numOfPlayers,
    submitted: state.submitted, 
})

const mapDispatchToProps = dispatch => ({
    addPlayer: value => dispatch(actions.addPlayer(value)),
    createTournament: () => dispatch(actions.submit())
})

export const SettingsConnected = connect( mapStateToProps, mapDispatchToProps)(Settings)
