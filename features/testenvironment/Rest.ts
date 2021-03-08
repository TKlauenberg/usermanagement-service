import { After, Before } from '@cucumber/cucumber';
import { actorCalled, TakeNote, TakeNotes } from '@serenity-js/core';
import {
  LocalServer,
  StartLocalServer,
  StopLocalServer,
} from '@serenity-js/local-server';
import { CallAnApi } from '@serenity-js/rest';

Before(() =>
  actorCalled('Apisitt').attemptsTo(
    StartLocalServer.onRandomPort(),
    TakeNote.of(LocalServer.url()),
  ),
);
After(() => actorCalled('Apisitt').attemptsTo(StopLocalServer.ifRunning()));

export const BaseAbilities = [
  CallAnApi.at('http://localhost'),
  TakeNotes.usingASharedNotepad(),
];
