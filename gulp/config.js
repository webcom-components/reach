let distFolder = './dist',
    options	= require('./util/handleArgs')({
        'string': ['config'],
        'default': {
            config: 'development'
        }
    });

export default {
    name: 'ComSDK',
    distFolder: distFolder,
    devOutputName: 'comsdk-debug.js',
    releaseOutputName : 'comsdk.js',

    // junit report path
    junit: (type) => {
        return `${distFolder}/${options.config}/junit/${type}/test-results.xml`;
    }
};

