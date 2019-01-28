// requires all tests in `project/test/**/*.test.js`
const tests = require.context('.', true, /\.test\.js$/);

tests.keys().forEach(tests);

// requires all components in `project/src/**/*.js`
const components = require.context('../src/', true, /\.js$/);

components.keys().forEach(components);
