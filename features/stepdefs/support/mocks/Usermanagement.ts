import { IUsermanagementBackend } from '../../../../src/backend';
import { User } from '../../../../src/model';
import { Result } from '../../../../src/util';

// technical admin which would also be seen in other implementations
const admin: User = {
  forname: 'admin',
  surname: 'admin',
  id: 'admin',
};

export class UsermanagementMock implements IUsermanagementBackend {
  #userDb = new Map<string, User>();
  constructor() {
    this.#userDb.set(admin.id, admin);
  }
  createUser(user: User): Promise<Result<User>> {
    this.#userDb.set(user.id, user);
    return new Promise((res, _rej) => res([true, user]));
  }
  deleteUser(userId: string): Promise<Result<undefined>> {
    this.#userDb.delete(userId);
    return new Promise((res, _rej) => res([true, undefined]));
  }
  listUsers(): Promise<Result<User[]>> {
    return new Promise((res, _rej) => res([true, [...this.#userDb.values()]]));
  }
}
