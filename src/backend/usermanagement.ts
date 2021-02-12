import { User } from "../model";
import { Result } from "../util";

export interface IUsermanagementBackend {
  createUser(user: User): Result<User>;
  deleteUser(userId: string): Result<undefined>;
  listUsers(): Result<User[]>;
}