import { connect } from 'react-redux';
import Header from './Header';


const mapStateToProps = state => ({
    champion: state.champion,
    submitted: state.submitted,
})


export default connect( mapStateToProps, null)(Header)
