// Polyfills for WebRTC

// TODO 19k minified, we can do less maybe
let adapterJS = require('adapterjs');

import datarefs from './datarefs';
import constants from './constants';

export default {
    hello: () => {
        console.log('hello world');
    },
    datarefs: datarefs,
    constants: constants
};