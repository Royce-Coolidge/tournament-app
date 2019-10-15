import { connect } from 'react-redux';
import Header from './Header';


const mapStateToProps = ({champion, submitted}) => ({
    champion: champion,
    submitted: submitted,
})

const mapDispatchToProps = dispatch => ({

})

export default connect( mapStateToProps, mapDispatchToProps)(Header)
