import { connect } from 'react-redux';
import Match from './Match';
import { actions } from '../../Data';

const mapStateToProps = state => ({
    players: state.players,
    
})

const mapDispatchToProps = dispatch => ({
    selectWinner: value => dispatch(actions.winner())
})

export default connect( mapStateToProps, mapDispatchToProps)(Match)
