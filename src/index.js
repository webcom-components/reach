// Polyfills for WebRTC


// TODO 19k minified, we can do less maybe
import adapterjs from 'adapterjs';

import actions from './actions';
import datarefs from './datarefs';
import reach from './reach';
import room from './room';

const SDK_VERSION = '0.0.1';

export default class ComSDK {
    constructor(url) {
        this.datarefs = datarefs(url);
    }

    Room(...args) {
        return room(...args, this.datarefs);
    }

    Reach(...args) {
        return reach(...args, this.datarefs);
    }

    static get SDK_VERSION() {
        return SDK_VERSION;
    }
    static get actions() {
        return actions;
    }
}