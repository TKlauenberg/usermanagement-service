import { IUsermanagementBackend } from "../../../../src/backend";
import { User } from "../../../../src/model";
import { Result } from "../../../../src/util";

export class UsermanagementMock implements IUsermanagementBackend {
  #userDb = new Map<string, User>();
  constructor() {

  }
  createUser(user: User): Result<User> {
    this.#userDb.set(user.id, user);
    return [true, user];
  }
  deleteUser(userId: string): Result<undefined> {
    this.#userDb.delete(userId);
    return [true, undefined];
  }
  listUsers(): Result<User[]> {
    return [true, [...this.#userDb.values()]];
  }
}