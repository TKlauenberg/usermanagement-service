export enum TestEnvironment {
  backendMock = 'backendMock',
  restWithMock = 'mockRest',
  restWithLdapBackend = 'ldapRest',
}

export function getEnvironment(): TestEnvironment {
  switch (process.env.testenv) {
    case TestEnvironment.backendMock:
      return TestEnvironment.backendMock;
    case TestEnvironment.restWithMock:
      return TestEnvironment.restWithMock;
    case TestEnvironment.restWithLdapBackend:
      return TestEnvironment.restWithLdapBackend;
    default:
      return TestEnvironment.restWithMock;
  }
}
