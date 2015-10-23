import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Participants from '../components/participants';
import * as comsdkActions from '../actions/com';

function mapStateToProps(state) {
	return {
		username: state.app.username,
		participants: state.app.participants,
		logged: state.app.logged
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(comsdkActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Participants);
