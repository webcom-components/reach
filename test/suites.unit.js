export const suites = require.context('.', true, /\/unit\/.*\.js$/);

global.suites = suites;
