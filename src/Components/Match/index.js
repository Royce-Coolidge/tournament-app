import { connect } from 'react-redux';
import Match from './Match';
import * as actions from "../../Data/actions";

const mapStateToProps = ({rounds, players}, {match, key}) => ({
    rounds: rounds,
    players: players,
    match: match,
    key: key,
})

const mapDispatchToProps = dispatch => ({
	selectWinner: (id, name) => dispatch(actions.selectWinner(id, name)),
    submitWinners: () => dispatch(actions.submitWinners()),
    reset: () => dispatch(actions.reset()),
})

export default connect( mapStateToProps, mapDispatchToProps)(Match)
