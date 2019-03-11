import cache from './cache';

/**
 * Get the event string for Webcom from Reach events
 * @access protected
 * @param {string} event A Reach event
 * @return {string}
 */
export const eventType = (event) => {
  let evt;
  if ((/_ADDED$/i).test(event) || /_PUBLISHED$/.test(event)) {
    evt = 'added';
  } else if (/_CHANGED$/.test(event) || /_REFRESHED$/.test(event)) {
    evt = 'changed';
  } else if (/_REMOVED$/.test(event) || /_UNPUBLISHED$/.test(event)) {
    evt = 'removed';
  }
  return evt ? `child_${evt}` : event;
};

/**
 * Write method
 * @param {string} method Write method (set,update)
 * @param {string} path The path to set
 * @param {object} data The data to set
 * @ignore
 */
const _write = (method, path, data) => new Promise((resolve, reject) => {
  cache.base.child(path)[method](data, error => (error ? reject(error) : resolve()));
});

/**
 * {@link Webcom#set} as a {@link Promise}
 * @access protected
 * @param {string} path The path to set
 * @param {object} data The data to set
 * @return {Promise<*, Error>}
 */
export const set = _write.bind(undefined, 'set');

/**
 * {@link Webcom#push} as a {@link Promise}
 * @access protected
 * @param {string} path The path to push
 * @param {object} data The data to push
 * @return {Promise<Webcom, Error>}
 */
export const push = (path, data) => new Promise((resolve, reject) => {
  const pushRef = cache.base.child(path).push(data,
    error => (error ? reject(error) : resolve(pushRef)));
});

/**
 * {@link Webcom#update} as a {@link Promise}
 * @access protected
 * @param {string} path The path to update
 * @param {object} data The data to update
 * @return {Promise<*, Error>}
 */
export const update = _write.bind(undefined, 'update');

/**
 * {@link Webcom#remove} as a {@link Promise}
 * @access protected
 * @param {string} path The path to remove
 * @return {Promise<*, Error>}
 */
export const remove = path => new Promise((resolve, reject) => {
  cache.base.child(path).remove(error => (error ? reject(error) : resolve()));
});

/**
 * {@link Webcom#once} shortcut as a {@link Promise}
 * @access protected
 * @param {string} path The path
 * @param {string} event The event
 * @returns {Promise<Webcom/api.DataSnapshot, Error>}
 */
export const once = (path, event) => new Promise((resolve, reject) => {
  cache.base.child(path).once(eventType(event), resolve, reject);
});

/**
 * {@link Webcom#once}('value') as a {@link Promise}
 * @access protected
 * @param {string} path The path to get
 * @return {Promise<Webcom/api.DataSnapshot, Error>}
 */
export const get = path => once(path, 'value');

/**
 * List values as a {@link Promise}
 * @access protected
 * @param {string} path The path to get
 * @param {function} Type The type of the object to list
 * @param params Additional constructor parameters
 * @return {Promise<Object[], Error>}
 */
export const list = (path, Type, ...params) => get(path)
  .then((snapData) => {
    if (snapData) {
      const values = [];
      snapData.forEach((snapChild) => {
        values.push(new Type(snapChild, ...params));
      });
      return values;
    }
    return [];
  });

/**
 * {@link Webcom#on} shortcut
 * @access protected
 * @param {string} path The path
 * @param {string} event The event
 * @param {Webcom/api.Query~queryCallback|function} queryCallback The callback
 * @param {Webcom/api.Query~cancelCallback|function} [cancelCallback] The callback
 */
export const on = (path, event, queryCallback, cancelCallback) => {
  cache.base.child(path).on(eventType(event), queryCallback, cancelCallback);
};

/**
 * {@link Webcom#off} shortcut
 * @access protected
 * @param {string} path The path
 * @param {string} event The event
 * @param {function} [callback] The callback
 * @param {object} context The execution context
 */
export const off = (path, event, callback) => {
  cache.base.child(path).off(eventType(event), callback);
};

/**
 * {@link Webcom#onDisconnect} shortcut
 * @access protected
 * @param {string} path The path
 * @return {Webcom/api.OnDisconnect}
 */
export const onDisconnect = path => cache.base.child(path).onDisconnect();

/**
 * Timestamp value
 * @access protected
 * @type {function}
 */
// export const ts = () => Webcom.ServerValue.TIMESTAMP;
export const ts = () => Date.now();
// HACK #DataSync: Rollback when TIMESTAMP works again (server-side bug with security rules)
