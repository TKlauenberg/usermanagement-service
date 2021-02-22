import { AfterAll } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight, Cast, TakeNotes } from '@serenity-js/core';
import { LocalServer, ManageALocalServer, StartLocalServer, StopLocalServer } from '@serenity-js/local-server';
import { CallAnApi, ChangeApiConfig } from '@serenity-js/rest';
import { IUsermanagementBackend } from '../../../src/backend';
import {getServers} from '../../../src/server';
import { UsermanagementMock } from './mocks/Usermanagement';
import { environment, TestEnvironment } from './util';

export class Actors implements Cast {
  prepare(actor: Actor): Actor {
    switch (environment) {
      case TestEnvironment.RestWithMock:
        return prepareActorForRestApi(actor, new UsermanagementMock());

      default:
        return prepareActorForRestApi(actor, new UsermanagementMock());
    }
  }
}

function prepareActorForRestApi(
  actor: Actor,
  usermanagementBackend: IUsermanagementBackend,
): Actor {
  actor.whoCan(
    ManageALocalServer.runningAHttpListener(getServers(usermanagementBackend)),
    CallAnApi.at('http://localhost'),
    TakeNotes.usingASharedNotepad(),
  );
  return actor
}
