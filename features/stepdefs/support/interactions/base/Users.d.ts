import { Activity } from '@serenity-js/core';
import { User } from '../../../../../src/model';

export const add: {
  theUser: (partialUser: Partial<User>) => Activity;
  theUsers: (users: (Partial<User> & { id: string })[]) => Activity;
};

export const getDetails: {
  ofTheUser: (userId: string) => Activity;
};

export const deleteTheUser: (userId: string) => Activity;

export const listUsers: Activity;
