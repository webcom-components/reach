import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/login';
import * as comsdkActions from '../actions/com';
import {connectReduxForm} from 'redux-form';

const LoginForm = connectReduxForm({
	form: 'login',            // the name of your form and the key to where your form's state will be mounted
	fields: ['username'] // a list of all your fields in your form
})(Login);


function mapStateToProps(state) {
	return {
		//counter: state.counter
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(comsdkActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
