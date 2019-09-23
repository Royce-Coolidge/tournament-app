import { connect } from "react-redux";
import Settings from "./Settings";
import { addPlayer } from "../../Data/actions";


const mapStateToProps = state => ({
    playerName: state.playerName,
    players: state.players,
})

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: value => dispatch(addPlayer(value)),
    };
};


export default connect( mapStateToProps, mapDispatchToProps)(Settings);
