/*global config,Webcom*/
import {OPENED, CONNECTED, MODERATOR, NONE, ONGOING} from '../../src/core/util/constants';
import Reach from '../../src/Reach';
import Room from '../../src/core/Room';
import Invite from '../../src/core/Invite';
import Participant from '../../src/core/Participant';
import * as log from '../util/logger';
import * as namespace from '../util/namespace';
import Message from '../../src/core/Message';

export default () => {

	describe('Rooms /', () => {
		let ref, user;

		beforeAll(done => {
			ref = new Reach(config.base);
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
						fail('Should not have been able to list rooms');
					})
					.catch(e => {
						expect(e).toBePermissionDenied();
						done(e);
					});
			});
		});

		describe('Authenticated Users / ', () => {

			beforeAll(done => {
				user = config.createdUsers[0];
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

			it('Should be able to join his own room', done => {
				ref.rooms()
					.then(rooms => {
						const userRooms = rooms.filter(room => room.owner === user.uid && room.status === OPENED);
						log.g('info', 'User\'s rooms', userRooms);
						return userRooms.pop().join();
					})
					.then(() => {
						done();
					}).catch(e => {
						expect(e).not.toBePermissionDenied();
						done(e);
					});
			});

			it('Should be able to list the participants of a joined room', done => {
				ref.rooms()
					.then(rooms => {
						const userRooms = rooms.filter(room => room.owner === user.uid && room.status === OPENED);
						log.g('info', 'User\'s rooms', userRooms);
						return userRooms.pop();
					})
					.then(room => room.join())
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
				ref.rooms()
					.then(rooms => {
						const userRooms = rooms.filter(room => room.owner === user.uid && room.status === OPENED);
						log.g('info', 'User\'s rooms', userRooms);
						return userRooms.pop().join();
					})
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
			});

			it('Should not be able to join a room when uninvited', done => {
				const user1 = config.createdUsers[1];
				ref.rooms()
					.then(rooms => {
						const user1Rooms = rooms.filter(room => room.owner === user1.uid && room.status === OPENED);
						log.g('info', 'User 1\'s rooms', user1Rooms);
						expect(user1Rooms.length).toBeGreaterThan(0);
						return user1Rooms.pop().join();
					})
					.then(() => {
						fail('Should not have been able to join a room uninvited');
						done();
					}).catch(e => {
						expect(e).toBePermissionDenied();
						done(e);
					});
			});

			it('Should not be able to list the participants of a room he has not joined', done => {
				ref.rooms()
					.then(rooms => {
						const userRooms = rooms.filter(room =>
							room.owner !== user.uid &&
							room.owner !== config.createdUsers[3].uid &&
							room.status === OPENED
						);
						log.g('info', 'Other user\'s rooms', userRooms);
						expect(userRooms.length).toBeGreaterThan(0);
						return userRooms.pop();
					})
					.then(room => room.participants())
					.then(() => {
						fail('Should not have been able to list the participants of a room he has not joined');
						done();
					}).catch(e => {
						expect(e).toBePermissionDenied();
						done(e);
					});
			});

			it('Should not be able to send a message to a room he has not joined', done => {
				ref.rooms()
					.then(rooms => {
						const userRooms = rooms.filter(room =>
							room.owner !== user.uid &&
							room.owner !== config.createdUsers[3].uid &&
							room.status === OPENED
						);
						log.g('info', 'Other user\'s rooms', userRooms);
						expect(userRooms.length).toBeGreaterThan(0);
						return userRooms.pop();
					})
					.then(room => room.sendMessage('test message'))
					.then(() => {
						fail('Should not have been able to send a message to a room he has not joined');
						done();
					})
					.catch(e => {
						expect(e).toBePermissionDenied();
						done(e);
					});
			});

			it('Should be able to invite a user to a room as the OWNER', done => {
				let _room,
					_user = config.createdUsers[2],
					_inviteId;
				ref.rooms()
					.then(rooms => {
						const userRooms = rooms.filter(room => room.owner === user.uid && room.status === OPENED);
						return userRooms.pop();
					})
					.then(room => {
						_room = room;
						return ref.users();
					})
					.then(users => {
						_user = users.filter(u => u.uid === _user.uid)[0];
						log.g('info', 'Invite a user to a room', [_room, user, _user]);
						return _room.invite([_user], MODERATOR, 'Test invite single user');
					})
					.then(data => {
						log.g('info', 'Invited a user to a room', [data.room].concat(data.invites));
						log.d(data);
						// Check room
						expect(data.room instanceof Room).toBeTruthy();
						expect(data.room.uid).toBe(_room.uid);
						// Check invites
						expect(data.invites).toBeAnArrayOf(Invite);
						expect(data.invites.length).toBe(1);
						expect(data.invites[0].from).toBe(user.uid);
						expect(data.invites[0].to).toBe(_user.uid);
						expect(data.invites[0].room).toBe(_room.uid);
						expect(data.invites[0].status).toBe(ONGOING);
						expect(data.invites[0].topic).toBe('Test invite single user');
						_inviteId = data.invites[0].uid;
						return new Promise((resolve, reject) => {
							ref.base.child(`_/rooms/${_room.uid}/participants`).once('value', d => {
								resolve(d.val());
							}, reject);
						});
					})
					.then(participants => {
						// Check participants
						expect(participants[_user.uid]).toBeDefined();
						expect(participants[_user.uid].role).toBe(MODERATOR);
					})
					.then(() => {
						ref.base.child(`_/invites/${_user.uid}/${_inviteId}`).once('value', dataSnapShot => {
							const values = dataSnapShot.val();
							expect(values.from).toBe(user.uid);
							expect(values.room).toBe(_room.uid);
							expect(values.status).toBe(ONGOING);
							expect(values.topic).toBe('Test invite single user');
							done();
						}, e => {
							log.e(e);
							done(e);
						});
					})
					.catch(e => {
						log.e(e);
						fail(e.message);
						done(e);
					});
			});

			it('Should be ale to invite a list of users', done => {
				let _room,
					_users;

				ref.rooms()
					.then(rooms => {
						_room = rooms.filter(room => room.owner === user.uid)[0];
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
						fail(e.message);
						done(e);
					});
			});

			it('Should be able to invite a user to a room as a MODERATOR', done => {
				let _room,
					_user = config.createdUsers[3],
					_inviteId;
				ref.rooms()
					.then(rooms => {
						const userRooms = rooms.filter(room => room.owner === config.createdUsers[2].uid);
						return userRooms.pop();
					})
					.then(room => {
						_room = room;
						return ref.users();
					})
					.then(users => {
						_user = users.filter(u => u.uid === _user.uid)[0];
						log.g('info', 'Invite a user to a room as MODERATOR', [_room, user, _user]);
						return _room.invite([_user], 'NONE', 'Test invite single user as MODERATOR');
					})
					.then(data => {
						log.g('info', 'Invited a user to a room as MODERATOR', [data.room].concat(data.invites));
						log.d(data);
						// Check room
						expect(data.room instanceof Room).toBeTruthy();
						expect(data.room.uid).toBe(_room.uid);
						// Check invites
						expect(data.invites).toBeAnArrayOf(Invite);
						expect(data.invites.length).toBe(1);
						expect(data.invites[0].from).toBe(user.uid);
						expect(data.invites[0].to).toBe(_user.uid);
						expect(data.invites[0].room).toBe(_room.uid);
						expect(data.invites[0].status).toBe(ONGOING);
						expect(data.invites[0].topic).toBe('Test invite single user as MODERATOR');
						_inviteId = data.invites[0].uid;
						return new Promise((resolve, reject) => {
							ref.base.child(`_/rooms/${_room.uid}/participants`).once('value', d => {
								resolve(d.val());
							}, reject);
						});
					})
					.then(participants => {
						// Check participants
						expect(participants[_user.uid]).toBeDefined();
						expect(participants[_user.uid].role).toBe(NONE);
					})
					.then(() => {
						ref.base.child(`_/invites/${_user.uid}/${_inviteId}`).once('value', dataSnapShot => {
							const values = dataSnapShot.val();
							expect(values.from).toBe(user.uid);
							expect(values.room).toBe(_room.uid);
							expect(values.status).toBe(ONGOING);
							expect(values.topic).toBe('Test invite single user as MODERATOR');
							done();
						}, e => {
							log.e(e);
							done(e);
						});
					})
					.catch(e => {
						log.e(e);
						fail(e.message);
						done(e);
					});
			});
		});
	});
};