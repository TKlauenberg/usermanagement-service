import { Activity, Interaction, Task } from '@serenity-js/core';
import { User } from '../../../../../src/model';
import { TestUsermanagementBackend } from '../../abilities/TestUsermanagementBackend';
import { addDefaults } from '../../util/defaultUser';


function addUser(partialUser: Partial<User> & { id: string }): Activity {
  return Interaction.where(
    `#actor adds the user with the id ${partialUser.id}`,
    (actor)=>actor.abilityTo(TestUsermanagementBackend).createUser(addDefaults(partialUser))
  );
}

export const add = {
  theUser: addUser,
  // todo user loop Task
  theUsers: (users: (Partial<User> & { id: string })[]) =>
    Task.where(`#actor adds multiple users`, ...users.map(addUser)),
};

export const getDetails = {
  ofTheUser: (userId: string) =>
    Task.where(
      `#actor gets the details of the user ${userId}`
    ),
};

export const deleteTheUser = (userId: string) =>
  Interaction.where(
    `#actor deletes the user with the id ${userId}`,
    (actor) => actor.abilityTo(TestUsermanagementBackend).deleteUser(userId)
  );

export const listUsers = Interaction.where(
  `#actor lists the users`,
  (actor) => actor.abilityTo(TestUsermanagementBackend).listUsers()
);
