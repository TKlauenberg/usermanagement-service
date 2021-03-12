import { Actor, ArtifactArchiver, Cast, configure } from '@serenity-js/core';
import { ManageALocalServer } from '@serenity-js/local-server';
import { getServers } from '../../src/server';
import { UsermanagementMock } from '../stepdefs/support/mocks';
import { TestEnvironment } from '../stepdefs/support/util';
import { baseCrew } from './base';
import { BaseAbilities } from './Rest';

process.env.testenv = TestEnvironment.restWithMock;

class Actors implements Cast {
  prepare(actor: Actor): Actor {
    return actor.whoCan(
      ManageALocalServer.runningAHttpListener(
        getServers(new UsermanagementMock()),
      ),
      ...BaseAbilities,
    );
  }
}

configure({
  actors: new Actors(),
  crew: [
    ArtifactArchiver.storingArtifactsAt('./target/restMock'),
    ...baseCrew,
  ],
});
