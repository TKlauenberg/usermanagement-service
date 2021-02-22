import { After, Before } from '@cucumber/cucumber';
import { actorCalled, TakeNote } from '@serenity-js/core';
import {
  LocalServer,
  StartLocalServer,
  StopLocalServer
} from '@serenity-js/local-server';
import { environment, TestEnvironment } from './getEnvironment';

if (
  environment === TestEnvironment.RestWithMock ||
  environment === TestEnvironment.RestWithLdapBackend
) {
  Before(() =>
    actorCalled('Apisitt').attemptsTo(
      StartLocalServer.onRandomPort(),
      TakeNote.of(LocalServer.url()),
    ),
  );
  After(() => actorCalled('Apisitt').attemptsTo(StopLocalServer.ifRunning()));
}
