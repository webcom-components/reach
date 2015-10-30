import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Participants from '../components/participants';
import * as reachActions from '../actions/reach';

function mapStateToProps(state) {
	return {
		username: state.user.username,
		invitSent: state.user.invitationSent,
		participants: state.participants,
		logged: state.user.logged
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(reachActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Participants);
