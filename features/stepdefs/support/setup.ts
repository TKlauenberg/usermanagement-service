import { ConsoleReporter } from '@serenity-js/console-reporter';
import {
  actorCalled,
  ArtifactArchiver,
  configure,
  TakeNote,
} from '@serenity-js/core';
import {
  LocalServer,
  StartLocalServer,
  StopLocalServer,
} from '@serenity-js/local-server';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { After, Before } from '@cucumber/cucumber';
import { Actors } from './actors';

configure({
  actors: new Actors(),
  crew: [
    ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
    new SerenityBDDReporter(),
    ConsoleReporter.forDarkTerminals(),
  ],
});

// Before(() =>
//   actorCalled('Gherkin').attemptsTo(
//     StartLocalServer.onRandomPort(),
//     TakeNote.of(LocalServer.url()),
//   ),
// );

// After(() => actorCalled('Gherkin').attemptsTo(StopLocalServer.ifRunning()));
