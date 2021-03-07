import { IUsermanagementBackend } from "../../../../src/backend";
import { User } from "../../../../src/model";
import { Result } from "../../../../src/util";

export class UsermanagementMock implements IUsermanagementBackend {
  #userDb = new Map<string, User>();
  constructor() {

  }
  createUser(user: User): Promise<Result<User>> {
    this.#userDb.set(user.id, user);
    return new Promise(()=>[true, user]);
  }
  deleteUser(userId: string): Promise<Result<undefined>> {
    this.#userDb.delete(userId);
    return new Promise(()=>[true, undefined]);
  }
  listUsers(): Promise<Result<User[]>> {
    return new Promise(()=>[true, [...this.#userDb.values()]]);
  }
}