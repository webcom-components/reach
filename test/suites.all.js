export const suites = require.context('.', true, /\/(unit|spec)\/.*\.js$/);

global.suites = suites;
