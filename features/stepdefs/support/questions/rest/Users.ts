import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';
import { User } from '../../../../../src/model';

export const Userlist = Question.about('the userlist', (actor) =>
  actor.answer(LastResponse.body<User[]>()),
);

export const UserDetails = Question.about('the details of a user', (actor) =>
  actor.answer(LastResponse.body<User>()),
);
