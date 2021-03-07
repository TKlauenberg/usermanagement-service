import { User } from "../model";
import { Result } from "../util";

export interface IUsermanagementBackend {
  createUser(user: User): Promise<Result<User>>;
  deleteUser(userId: string): Promise<Result<undefined>>;
  listUsers(): Promise<Result<User[]>>;
}