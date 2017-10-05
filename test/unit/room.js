//import {OPENED, CONNECTED, MODERATOR, NONE, ONGOING} from '../../src/core/util/constants';
import {OPENED} from '../../src/core/util/constants';
import Reach from '../../src/Reach';
import Room from '../../src/core/Room';
//import Invite from '../../src/core/Invite';
//import Participant from '../../src/core/Participant';
import * as log from '../util/logger';
//import * as namespace from '../util/namespace';
//import Message from '../../src/core/Message';

describe('Rooms /', () => {
	let ref, user;
	const getRooms = (u, own = true) => {
		return ref.rooms()
			.then(rooms => rooms.filter(
				room => {
					const owners = u.some(_u => _u.uid === room.owner);
					return room.status === OPENED && owners === own;
				})
			);
	};
	const getRoom = (u, own) => {
		return getRooms(u, own).then(rooms => rooms.pop());
	};
	/*const joinRoom = (u, own) => {
		return getRoom(u, own).then(room => room.join());
	};
	const invite = (from, to, room, role, text) => { // eslint-disable-line max-params
		return ref.users()
			.then(users => {
				const _userTo = users.filter(u => u.uid === to.uid)[0];
				log.g('warn', 'Invite a user to a room', [room, from, _userTo]);
				return room.invite([_userTo], role, text);
			});
	};
	const checkInvite = (data, from, to , room, role, text) => { // eslint-disable-line max-params
		log.g('info', 'Invited a user to a room', [data.room].concat(data.invites));
		// Check room
		expect(data.room instanceof Room).toBeTruthy();
		expect(data.room.uid).toBe(room.uid);
		// Check invites
		expect(data.invites).toBeAnArrayOf(Invite);
		expect(data.invites.length).toBe(1);
		expect(data.invites[0].from).toBe(from.uid);
		expect(data.invites[0].to).toBe(to.uid);
		expect(data.invites[0].room).toBe(room.uid);
		expect(data.invites[0].status).toBe(ONGOING);
		expect(data.invites[0].topic).toBe(text);
		const _inviteId = data.invites[0].uid;
		return new Promise(
			(resolve, reject) => {
				ref.base.child(`_/rooms/${room.uid}/participants`).once('value', d => {
					resolve(d.val());
				}, reject);
			})
			.then(participants => {
				// Check participants
				expect(participants[to.uid]).toBeDefined();
				expect(participants[to.uid].role).toBe(role);
			})
			.then(() => new Promise((resolve, reject) => {
				ref.base.child(`_/invites/${to.uid}/${_inviteId}`).once('value', dataSnapShot => {
					const values = dataSnapShot.val();
					expect(values.from).toBe(from.uid);
					expect(values.room).toBe(room.uid);
					expect(values.status).toBe(ONGOING);
					expect(values.topic).toBe(text);
					resolve();
				}, e => {
					log.e(e);
					reject(e);
				});
			}));
	};*/

	beforeAll(done => {
		ref = new Reach(global.env.base);
		done();
	});

	describe('Unauthenticated Users / ', () => {

		beforeAll(done => {
			// Ensure we are not authenticated
			ref.logout().then(done, done);
		});

		it('Should not be able to list rooms', done => {
			ref.rooms()
				.then(() => {
					done.fail('Should not have been able to list rooms');
				})
				.catch(e => {
					expect(e).toBePermissionDenied();
					done(e);
				});
		});
	});

	describe('Authenticated Users / ', () => {

		beforeAll(done => {
			user = global.env.createdUsers[0];
			ref.login(user.email, user.password, 'Homer').then(() => {
				done();
			}, e => {
				log.e(e);
				done(e);
			});
		});

		it('Should be able to list rooms', done => {
			ref.rooms()
				.then(rooms => {
					log.g('info', `Listed ${rooms.length} room(s)`, rooms);
					expect(rooms).toBeDefined();
					expect(rooms).toBeAnArrayOf(Room);
					expect(rooms.length).toBeGreaterThan(0);
					done();
				}).catch(e => {
					log.d(e);
					done(e);
				});
		});

		it('Should be able to create a room', done => {
			ref.createRoom('My Test Room')
				.then(room => {
					log.g('info', 'Created 1 room', room);
					expect(room instanceof Room).toBeTruthy();
					expect(room.name).toBe('My Test Room');
					expect(room.owner).toBe(user.uid);
					done();
				}).catch(e => {
					log.d(e);
					done(e);
				});
		});

		/* it('Should be able to join his own room', done => {
			joinRoom([user])
				.then(() => {
					done();
				}).catch(e => {
					expect(e).not.toBePermissionDenied();
					done(e);
				});
		});

		it('Should be able to list the participants of a joined room', done => {
			joinRoom([user])
				.then(room => room.participants())
				.then(participants => {
					log.g('info', 'Room participants', participants);
					expect(participants).toBeAnArrayOf(Participant);
					const u = participants.filter(participant => participant.uid === user.uid);
					expect(u.length).toBe(1);
					expect(u[0].status).toBe(CONNECTED);
				})
				.then(() => {
					done();
				}).catch(e => {
					expect(e).not.toBePermissionDenied();
					done(e);
				});
		});

		it('Should be able to send a message within a joined room', done => {
			joinRoom([user])
				.then(room => room.sendMessage('test message'))
				.then(message => {
					log.g('info', 'Sent message', [message]);
					expect(message instanceof Message).toBeTruthy();
					expect(message.from).toBe(user.uid);
					expect(message.text).toBe('test message');
				})
				.then(() => {
					done();
				})
				.catch(e => {
					log.e(e);
					expect(e).not.toBePermissionDenied();
					done(e);
				});
		}); */

		it('Should not be able to join a room when uninvited', done => {
			getRooms([global.env.createdUsers[1]])
				.then(user1Rooms => {
					log.g('info', 'User 1\'s rooms', user1Rooms);
					expect(user1Rooms.length).toBeGreaterThan(0);
					return user1Rooms.pop().join();
				})
				.then(() => {
					done.fail('Should not have been able to join a room uninvited');
				}).catch(e => {
					expect(e).toBePermissionDenied();
					done(e);
				});
		});

		it('Should not be able to list the participants of a room he has not joined', done => {
			getRoom([user, global.env.createdUsers[3]], false)
				.then(room => room.participants())
				.then(() => {
					done.fail('Should not have been able to list the participants of a room he has not joined');
				}).catch(e => {
					expect(e).toBePermissionDenied();
					done(e);
				});
		});

		it('Should not be able to send a message to a room he has not joined', done => {
			getRoom([user, global.env.createdUsers[3]], false)
				.then(room => room.sendMessage('test message'))
				.then(() => {
					done.fail('Should not have been able to send a message to a room he has not joined');
				})
				.catch(e => {
					expect(e).toBePermissionDenied();
					done(e);
				});
		});

		/* it('Should be able to invite a user to a room as the OWNER', done => {
			const _user = global.env.createdUsers[2];
			let _room;
			getRoom([user])
				.then(room => {
					_room = room;
					return invite(user, _user, _room, MODERATOR, 'Test invite single user');
				})
				.then(data => checkInvite(data, user, _user, _room, MODERATOR, 'Test invite single user'))
				.then(() => {done();})
				.catch(e => {
					log.e(e);
					done.fail(e.message);
				});
		});

		it('Should be ale to invite a list of users', done => {
			let _room,
				_users;
			getRoom([user])
				.then(room => {
					_room = room;
					log.i(_room);
					return ref.users();
				})
				.then(users => {
					log.i(users);
					_users = users;
					return _room.invite(users, NONE, 'Test invite multiple users');
				})
				.then(data => {
					log.g('info', 'Invited multiple users', [data.room].concat(data.invites));
					expect(data.room instanceof Room).toBeTruthy();
					expect(data.room.uid).toBe(_room.uid);
					expect(data.invites).toBeAnArrayOf(Invite);
					expect(data.invites.length).toBe(_users.length);
					return namespace.get(`_/rooms/${_room.uid}/participants`);
				})
				.then(snap => {
					_users.every(u => expect(snap.hasChild(u.uid)).toBeTruthy());
					expect(snap.numChildren()).toBe(_users.length + 1);
				})
				.then(() => {done();})
				.catch(e => {
					log.e(e);
					done.fail(e.message);
				});
		});

		it('Should be able to invite a user to a room as a MODERATOR', done => {
			const _user = global.env.createdUsers[3];
			let _room;
			getRoom([global.env.createdUsers[2]])
				.then(room => {
					_room = room;
					return invite(user, _user, _room, NONE, 'Test invite single user as MODERATOR');
				})
				.then(data => checkInvite(data, user, _user, _room, NONE, 'Test invite single user as MODERATOR'))
				.then(() => {done();})
				.catch(e => {
					log.e(e);
					done.fail(e.message);
				});
		}); */
	});
});
