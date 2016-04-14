export const suites = require.context('.', true, /\/spec\/.*\.js$/);

global.suites = suites;
