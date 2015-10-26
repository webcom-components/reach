import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/login';
import * as reachActions from '../actions/reach';
import {connectReduxForm} from 'redux-form';

const LoginForm = connectReduxForm({
	form: 'login',            // the name of your form and the key to where your form's state will be mounted
	fields: ['username'] // a list of all your fields in your form
})(Login);


function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(reachActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
