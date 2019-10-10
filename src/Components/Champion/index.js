import { connect } from 'react-redux';
import { Champion } from './Champion';
import * as actions from "../../Data/actions";


const mapStateToProps = state => ({
    champion: state.champion,
})

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(actions.reset()),
})

export default connect( mapStateToProps, mapDispatchToProps)(Champion)
