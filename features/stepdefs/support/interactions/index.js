const { environment, TestEnvironment } = require('../util')

switch (environment) {
    case TestEnvironment.RestWithMock:
        module.exports = require('./rest');
        break;
    case TestEnvironment.Backend:
        module.exports = require('./backend')
        break;
    default:
        module.exports = require('./rest');
        break;
}