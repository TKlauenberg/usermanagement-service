const { getEnvironment, TestEnvironment } = require('../util');

switch (getEnvironment()) {
  case TestEnvironment.restWithMock:
    module.exports = require('./rest');
    break;
  case TestEnvironment.backendMock:
    module.exports = require('./backend');
    break;
  default:
    module.exports = require('./rest');
    break;
}
