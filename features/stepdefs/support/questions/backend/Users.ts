import { Question } from '@serenity-js/core';
import { TestUsermanagementBackend } from '../../abilities/TestUsermanagementBackend';

export const Userlist = Question.about(
  'the userlist',
  (actor) => actor.abilityTo(TestUsermanagementBackend).lastUserlist,
);

export const UserDetails = Question.about(
  'the details of a user',
  (actor) => actor.abilityTo(TestUsermanagementBackend).lastUserDetails,
);
