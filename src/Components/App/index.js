import { connect } from 'react-redux';
import App from './App';
//import { actions } from '../../Data';

const mapStateToProps = state => ({
    submitted: state.submitted,
    
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect( mapStateToProps, mapDispatchToProps)(App)
