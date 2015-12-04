/* resolveIP
 ------------
 Resolve host ip
 */
'use strict';

const
	os = require('os'),
	_ = require('lodash');

export default () => {
	let resolved;
	const ipAddresses = _.flatten(_.values(os.networkInterfaces()));

	if(ipAddresses.length > 0) {
		resolved = _.result(_.find(ipAddresses, (address) => {
			// ignore IPv6, loopack & virtualbox addresses
			return address.internal === false && /^ipv4$/i.test(address.family) && !/^10\.0\./.test(address.address);
		}), 'address');
	}

	return resolved || 'localhost';
};