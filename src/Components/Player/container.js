import { connect } from 'react-redux';
import Player from './Player';
//import { actions } from '../../Data';

const mapStateToProps = state => ({
    players: state.players,
    
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect( mapStateToProps, mapDispatchToProps)(Player)
