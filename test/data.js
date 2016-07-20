import {OPENED, ONGOING, CONNECTED, NOT_CONNECTED, OWNER, MODERATOR, NONE} from '../src/core/util/constants';

export const data = (users, timestamp) => {
	const d = {
		_: {
			ice: [
				{urls: 'turns:turn1.webcom.orange.com:443', username: 'admin', credential: 'webcom1234'},
				{urls: 'turns:turn2.webcom.orange.com:443', username: 'admin', credential: 'webcom1234'},
				{urls: 'turns:turn3.webcom.orange.com:443', username: 'admin', credential: 'webcom1234'}
			],
			devices: {},
			invites: {},
			rooms: {}
		},
		rooms: {},
		users: {}
	};

	users.forEach((user, i) => {
		d.users[user.uid] = {
			name: user.email,
			status: NOT_CONNECTED,
			lastSeen: timestamp
		};
		d.rooms[`-${timestamp}-${i}`] = {
			name: `-${timestamp}-${i}`,
			owner: user.uid,
			status: OPENED,
			_created: timestamp
		};
		d._.rooms[`-${timestamp}-${i}`] = {
			meta: {
				owner: user.uid,
				status: OPENED
			},
			participants: {}
		};
		d._.rooms[`-${timestamp}-${i}`].participants[user.uid] = {
			role: OWNER,
			status: NOT_CONNECTED
		};
	});

	// 0 is invited by 2 as MODERATOR
	const _invite = (from, to, role, room) => {
		d._.invites[users[to].uid] = {};
		d._.invites[users[to].uid][room] = {
			from: users[from].uid,
			room,
			status: ONGOING,
			topic: 'populated as MODERATOR',
			_created: timestamp
		};
		d._.rooms[room].participants[users[to].uid] = {
			status: NOT_CONNECTED,
			role
		};
	};
	// 0 is invited by 2 as MODERATOR
	_invite(2, 0, MODERATOR, `-${timestamp}-${2}`);

	// 0 is invited by 3 as a simple participant
	_invite(3, 0, NONE, `-${timestamp}-${3}`);

	// 0 is connected to more than 1 device
	d.users[users[0].uid].status = CONNECTED;
	d._.devices[users[0].uid] = {};
	d._.devices[users[0].uid][`-${timestamp}-device-0`] = {
		sdk: {reach: '1.0.0', webcom: '0.2.4'},
		os: 'ios_9',
		status: CONNECTED
	};
	d._.devices[users[0].uid][`-${timestamp}-device-1`] = {
		sdk: {reach: '1.1.0', webcom: '0.2.4'},
		userAgent: 'Mozilla/5.0 (X11; Linux x86_64) ' +
						'AppleWebKit/537.36 (KHTML, like Gecko) ' +
						'Chrome/50.0.2661.94 Safari/537.36',
		status: CONNECTED
	};
	return d;
};

export default data;
