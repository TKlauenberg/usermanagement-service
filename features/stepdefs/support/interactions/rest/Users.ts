import { Ensure, equals } from '@serenity-js/assertions';
import { Activity, Note, Task, Transform } from '@serenity-js/core';
import { LocalServer } from '@serenity-js/local-server';
import {
  ChangeApiConfig,
  DeleteRequest,
  GetRequest,
  LastResponse,
  PostRequest,
  Send,
} from '@serenity-js/rest';
import { User } from '../../../../../src/model';
const defaultUser: User = {
  id: 'testuser',
  forname: 'John',
  surname: 'Doe',
};

export const addDefaults = (objectToTransform: Partial<User>): User =>
  Object.assign(defaultUser, objectToTransform);

function addUser(partialUser: Partial<User> & { id: string }): Activity {
  return Task.where(
    `#actor adds the user with the id ${partialUser.id}`,
    ChangeApiConfig.setUrlTo(Note.of(LocalServer.url())),
    Send.a(
      PostRequest.to('/api/v1/users').with(Transform.the(partialUser, addDefaults)),
    ),
    Ensure.that(LastResponse.status(), equals(201)),
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
      `#actor gets the details of the user ${userId}`,
      ChangeApiConfig.setUrlTo(Note.of(LocalServer.url())),
      Send.a(GetRequest.to(`/api/v1/users/${userId}`)),
    ),
};

export const deleteTheUser = (userId: string) =>
  Task.where(
    `#actor deletes the user with the id ${userId}`,
    ChangeApiConfig.setUrlTo(Note.of(LocalServer.url())),
    Send.a(DeleteRequest.to(`/api/v1/users/${userId}`)),
  );

export const listUsers = Task.where(
  `#actor lists the users`,
  ChangeApiConfig.setUrlTo(Note.of(LocalServer.url())),
  Send.a(GetRequest.to('/api/v1/users')),
);
