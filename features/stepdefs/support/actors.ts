import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { ManageALocalServer } from '@serenity-js/local-server';
import { CallAnApi } from '@serenity-js/rest';
import server from '../../../src/server';

export class Actors implements Cast {
  prepare(actor: Actor): Actor {
    return actor.whoCan(
      ManageALocalServer.runningAHttpListener(server),
      CallAnApi.at('http://localhost'),
      TakeNotes.usingASharedNotepad(),
    );
  }
}
