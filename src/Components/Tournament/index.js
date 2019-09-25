import { connect } from 'react-redux';
import Tournament  from './Tournament';
//import { actions } from '../../Data';

const mapStateToProps = state => ({
    players: state.players,
    numOfPlayers: state.numOfPlayers,
    submitted: state.submitted, 
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect( mapStateToProps, mapDispatchToProps)(Tournament)
