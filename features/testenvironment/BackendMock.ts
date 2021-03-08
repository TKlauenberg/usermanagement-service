import { Actor, Cast, configure } from '@serenity-js/core';
import { TestUsermanagementBackend } from '../stepdefs/support/abilities';
import { UsermanagementMock } from '../stepdefs/support/mocks';
import { TestEnvironment } from '../stepdefs/support/util';
import { baseCrew } from './base';

process.env.testenv = TestEnvironment.backendMock;

class Actors implements Cast {
  prepare(actor: Actor): Actor {
    return actor.whoCan(
      TestUsermanagementBackend.withBackend(new UsermanagementMock()),
    );
  }
}

configure({
  actors: new Actors(),
  crew: [...baseCrew],
});
