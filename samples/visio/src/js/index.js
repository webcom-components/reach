/* global ComSDK, $ */

require('!style!css!bootstrap.css')
require('bootstrap');
require('!style!css!../style.css');
require('script!webcom');
require('script!comsdk');

import React from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root';
import history from './history';

const NAMESPACE = 'comsdk';


ReactDom.render(
	<Root history={history} />,
	document.getElementById('root')
);
/*
let com,
	reach,
	loginBox,
	list,
	listBox;

function login(username) {
	com = new ComSDK(`${window.location.protocol}//${window.location.hostname}:8000/base/${NAMESPACE}`);
	reach = com.Reach(username);
}

function changeParticipantStatus(participant, data) {
	participant.removeClass(!data.connectedList ? 'list-group-item-success' : 'list-group-item-danger');
	participant.addClass(data.connectedList ? 'list-group-item-success' : 'list-group-item-danger');
	if (!data.connectedList) {
		participant.attr('disabled', 'disabled');
	}
	else {
		participant.removeAttr('disabled');
	}
}

$(() => {
	loginBox = $('#loginBox');
	listBox = $('#partipantsBox');
	list = $('#partipantList');

	listBox.hide();


	$('#btnLogin').click((e) => {
		e.preventDefault();

		login($('#inputUsername').val());

		reach.on('userAdded', (data) => {
			const username = Object.keys(data)[0];

			if (username === $('#inputUsername').val()) {
				return;
			}

			const participant =
				$(`<button type="button" class="list-group-item" id="user_${username}">${username}</button>`);

			changeParticipantStatus(participant, data[username]);

			list.append(participant);

			loginBox.hide();
			listBox.show();

			console.log(data[username]);
		});

		reach.on('userChanged', (data) => {
			const username = Object.keys(data)[0];
			const participant = $(`#user_${username}`);
			if (participant.length) {
				changeParticipantStatus(participant, data[username]);
			}
		});
	});
});
*/
