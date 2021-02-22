const { environment, TestEnvironment } = require('../util')

switch (environment) {
    case TestEnvironment.RestWithMock:
        module.exports = require('./rest');
        break;
    default:
        module.exports = require('./rest');
        break;
}