const base = [
  '--publish-quiet',
  `--format ${
    process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
  }`,
  '--format @serenity-js/cucumber',
  '--require features/stepdefs/dist/features/stepdefs/**/*.js',
].join(' ');

const restMock = `--require features/stepdefs/dist/features/testenvironment/RestMock.js ${base}`;

const backendMock = `--require features/stepdefs/dist/features/testenvironment/BackendMock.js ${base}`;

module.exports = {
  default: restMock,
  restMock: restMock,
  backendMock: backendMock,
};
