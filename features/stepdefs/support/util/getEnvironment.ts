export enum TestEnvironment {
  RestWithMock,
  RestWithLdapBackend,
}

function getEnvironment(): TestEnvironment {
  switch (process.env.testenv) {
    case 'mockrest':
      return TestEnvironment.RestWithMock;
    default:
      return TestEnvironment.RestWithMock;
  }
}

export const environment = getEnvironment();
