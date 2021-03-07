import { Ability, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { IUsermanagementBackend } from '../../../../src/backend';
import { User } from '../../../../src/model';

export class TestUsermanagementBackend implements Ability {
  static withBackend(backend: IUsermanagementBackend) {
    return new TestUsermanagementBackend(backend);
  }
  
  static as(
    actor: UsesAbilities & AnswersQuestions,
  ): TestUsermanagementBackend {
    return actor.abilityTo(TestUsermanagementBackend);
  }

  #backend: IUsermanagementBackend;
  #lastResult: boolean;
  #lastUserDetails: User;
  #lastUserlist: User[];
  #lastError: Error;
  constructor(backend: IUsermanagementBackend) {
    this.#backend = backend;
  }
  async createUser(user: User): Promise<void> {
    const [result, userOrError] = await this.#backend.createUser(user);
    this.#lastResult = result;
    if (result) {
      this.#lastUserDetails = userOrError as User;
    } else {
      this.#lastError = userOrError as Error;
    }
  }
  async deleteUser(userId: string): Promise<void> {
    const [result, maybeError] = await this.#backend.deleteUser(userId);
    this.#lastResult = result;
    if (!result) {
      this.#lastError = maybeError;
    }
  }
  async listUsers(): Promise<void> {
    const [result, userlistOrError] = await this.#backend.listUsers();
    this.#lastResult = result;
    if (result) {
      this.#lastUserlist = userlistOrError as User[];
    } else {
      this.#lastError = userlistOrError as Error;
    }
  }
  get lastResult(): boolean {
    return this.#lastResult;
  }
  get lastUserDetails(): User {
    return this.#lastUserDetails;
  }
  get lastUserlist(): User[] {
    return this.#lastUserlist;
  }
  get lastError(): Error {
    return this.#lastError;
  }
}
