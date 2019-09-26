import { connect } from 'react-redux';
import Bracket from './Bracket';
//import { actions } from '../../Data';

const mapStateToProps = state => ({
    players: state.players,
    
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect( mapStateToProps, mapDispatchToProps)(Bracket)
