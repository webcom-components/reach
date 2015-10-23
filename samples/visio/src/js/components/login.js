import React, { Component, PropTypes } from 'react';

class Login extends Component {
	static propTypes = {
		login: PropTypes.func.isRequired,
		fields: PropTypes.object.isRequired
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.login(this.props.fields.username.value);
		console.log(arguments);
	}

	render() {
		const { login } = this.props;
		const { fields : { username } } = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-default partipantsPanel">
							<div className="panel-body">
								<form id="loginBox">
									<div className="form-group">
										<label htmlFor="username">your name</label>
										<input className="form-control" placeholder="your name" {...username} />
									</div>
									<button type="submit" className="btn btn-default" id="btnLogin" onClick={this.handleSubmit.bind(this)}>login</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Login;