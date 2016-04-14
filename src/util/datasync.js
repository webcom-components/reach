import ref from './ref';

/**
 * Get the event string for Webcom from Reach events
 * @protected
 * @param {string} event A Reach event
 * @return {string}
 */
export const eventType = (event) => {
	let evt;
	if((/_ADDED$/i).test(event) || /_PUBLISHED$/.test(event)) {
		evt = 'added';
	} else if(/_CHANGED$/.test(event) || /_REFRESHED$/.test(event)) {
		evt = 'changed';
	} else if(/_REMOVED$/.test(event) || /_UNPUBLISHED$/.test(event)) {
		evt = 'removed';
	}
	return evt ? `child_${evt}` : event;
};

/**
 * {@link Webcom#set} as a {@link Promise}
 * @protected
 * @param {string} path The path to set
 * @param {object} data The data to set
 * @return {Promise<*, Error>}
 */
export const set = (path, data) => new Promise((resolve, reject) => {
	ref.base.child(path).set(data, error => error ? reject(error) : resolve());
});

/**
 * {@link Webcom#push} as a {@link Promise}
 * @protected
 * @param {string} path The path to push
 * @param {object} data The data to push
 * @return {Promise<Webcom, Error>}
 */
export const push = (path, data) => new Promise((resolve, reject) => {
	const pushRef = ref.base.child(path).push(data, error => error ? reject(error) : resolve(pushRef));
});

/**
 * {@link Webcom#update} as a {@link Promise}
 * @protected
 * @param {string} path The path to update
 * @param {object} data The data to update
 * @return {Promise<*, Error>}
 */
export const update = (path, data) => new Promise((resolve, reject) => {
	ref.base.child(path).update(data, error => error ? reject(error) : resolve());
});

/**
 * {@link Webcom#remove} as a {@link Promise}
 * @protected
 * @param {string} path The path to remove
 * @return {Promise<*, Error>}
 */
export const remove = (path) => new Promise((resolve, reject) => {
	ref.base.child(path).remove(error => error ? reject(error) : resolve());
});

/**
 * {@link Webcom#once} shortcut as a {@link Promise}
 * @protected
 * @param {string} path The path
 * @param {string} event The event
 * @returns {Promise<Webcom/api.DataSnapshot, Error>}
 */
export const once = (path, event) => new Promise((resolve, reject) => {
	ref.base.child(path).once(eventType(event), resolve, reject);
});


/**
 * {@link Webcom#once}('value') as a {@link Promise}
 * @protected
 * @param {string} path The path to get
 * @return {Promise<Webcom/api.DataSnapshot, Error>}
 */
export const get = path => once(path, 'value');

/**
 * {@link Webcom#on} shortcut
 * @protected
 * @param {string} path The path
 * @param {string} event The event
 * @param {function} callback The callback
 */
export const on = (path, event, callback) => {
	ref.base.child(path).on(eventType(event), callback);
};

/**
 * {@link Webcom#off} shortcut
 * @protected
 * @param {string} path The path
 * @param {string} event The event
 * @param {function} [callback] The callback
 */
export const off = (path, event, callback) => {
	ref.base.child(path).off(eventType(event), callback);
};

/**
 * {@link Webcom#onDisconnect} shortcut
 * @protected
 * @param {string} path The path
 * @return {Webcom/api.OnDisconnect}
 */
export const onDisconnect = path => ref.base.child(path).onDisconnect();
