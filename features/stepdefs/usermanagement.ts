import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { contain, Ensure, equals, not } from '@serenity-js/assertions';
import {
  actorCalled,
  actorInTheSpotlight,
  Loop,
  Transform,
} from '@serenity-js/core';
import { User } from '../../src/model';
import { add, deleteTheUser, listUsers } from './support/interactions';
import { Userlist } from './support/questions';

Given(
  '{word} creates a user base with the users',
  (actor: string, dataTable: DataTable) =>
    actorCalled(actor).attemptsTo(add.theUsers(dataTable.hashes())),
);

Given(
  '{word} creates a new User with the Username {string}',
  (actor: string, id: string) =>
    actorCalled(actor).attemptsTo(add.theUser({ id })),
);

Given('{word} deletes the user {string}', (actor: string, userId: string) =>
  actorCalled(actor).attemptsTo(deleteTheUser(userId)),
);

When('{word} lists all users', (actor: string) =>
  actorCalled(actor).attemptsTo(listUsers),
);

Then('the userlist only contains', (dataTable: DataTable) => {
  const userIdList = Transform.the(Userlist, (x) => x.map((y) => y.id));
  return actorInTheSpotlight().attemptsTo(
    Ensure.that(Userlist, not(equals(undefined))),
    Ensure.that(
      Transform.the(Userlist, (x) => x.length),
      equals(dataTable.hashes().length),
    ),
    Loop.over(dataTable.hashes()).to(
      Ensure.that(
        userIdList,
        contain(Transform.the(Loop.item<User>(), (x) => x.id)),
      ),
    ),
  );
});
