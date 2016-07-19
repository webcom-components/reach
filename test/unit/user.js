/*global config,Webcom*/
import Reach from '../../src/Reach';
import User from '../../src/core/User';
import Room from '../../src/core/Room';
import Invite from '../../src/core/Invite';
import Participant from '../../src/core/Participant';
import {ONGOING} from '../../src/core/util/constants';

import * as log from '../util/logger';

export default () => {
	describe('Users /', () => {
		let ref;

		beforeAll(done => {
			ref = new Reach(config.base);
			done();
		});

		describe('Unauthenticated Users / ', () => {

			beforeAll(done => {
				// Ensure we are not authenticated
				ref.logout().then(done, done);
			});

			it('Should not be able to list users', done => {
				ref.users()
					.then(() => {
						fail('Should not have been able to list users');
					})
					.catch(e => {
						expect(e).toBePermissionDenied();
						done(e);
					});
			});
		});

		describe('Authenticated Users / ', () => {
			let user;

			beforeAll(done => {
				user = config.createdUsers[0];
				ref.login(user.email, user.password, 'Bart').then(() => {
					done();
				});
			});

			it('Should be able to list users', done => {
				ref.users()
					.then(users => {
						log.g('info', `Listed ${users.length} users`, users);
						expect(users).toBeAnArrayOf(User);
						expect(users.length).toBeGreaterThan(0);
					})
					.then(done)
					.catch(e => {
						expect(e).not.toBePermissionDenied();
						done(e);
					});
			});

			it('Should be able to list users (including himself)', done => {
				ref.users(true)
					.then(users => {
						log.g('info', `Listed ${users.length} users (including current)`, users);
						expect(users.length).toBeGreaterThan(0);
						expect(users.filter(u => u.uid === user.uid).length).toBe(1);
					})
					.then(done)
					.catch(e => {
						expect(e).not.toBePermissionDenied();
						done(e);
					});
			});

			it('Should be able to list invites', done => {
				ref.invites()
					.then(invites => {
						expect(invites).toBeAnArrayOf(Invite);
						done();
					})
					.catch(e => {
						fail(e.message);
						done(e);
					});
			});
			
			it('Should be able to able to invite a user (no message)', done => {
				let invitee = null;
				let room = null;
				let invite = null;
				ref.users()
					.then(users => {
						invitee = users[0];
						log.g('info', 'Invitee', [invitee]);
						return invitee.invite();
					})
					.then(data => {
						log.g('info', 'User invite', [data.room, data.invite]);
						// Check room
						room = data.room;
						expect(room instanceof Room).toBeTruthy();
						expect(room.owner).toBe(user.uid);
						expect(room.name).toBe(`${user.uid}-${invitee.uid}`);
						// Check invite
						invite = data.invite;
						expect(invite instanceof Invite).toBeTruthy();
						expect(invite.to).toBe(invitee.uid);
						expect(invite.from).toBe(user.uid);
						expect(invite.status).toBe(ONGOING);
						return room.participants();
					})
					.then(participants => {
						// Check participants
						expect(participants).toBeAnArrayOf(Participant);
						expect(participants.length).toBeGreaterThan(0);
					})
					.then(() => done())
					.catch(e => {
						log.e(e);
						expect(e).not.toBePermissionDenied();
						done(e);
					});
			});
		});
	});
};