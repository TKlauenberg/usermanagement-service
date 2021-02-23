import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { contain, Ensure } from '@serenity-js/assertions';
import { actorCalled, actorInTheSpotlight, Transform } from '@serenity-js/core';
import {
  add,
  deleteTheUser,
  listUsers,
} from './support/screenplay/Interactions/Users';
import { Userlist } from './support/screenplay/Questions';

Given('a user base with the users', (dataTable: DataTable) =>
  actorCalled('gherkin').attemptsTo(add.theUsers(dataTable.hashes())),
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
  const activities = dataTable
    .hashes()
    .map((x) => Ensure.that(userIdList, contain(x.id)));
  actorInTheSpotlight().attemptsTo(...activities);
});
