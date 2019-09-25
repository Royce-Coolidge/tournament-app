import { connect } from 'react-redux';
import Match from './Match';
//import { actions } from '../../Data';

const mapStateToProps = state => ({
    players: state.players,
    
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect( mapStateToProps, mapDispatchToProps)(Match)
