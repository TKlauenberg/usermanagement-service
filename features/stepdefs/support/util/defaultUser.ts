import { User } from '../../../../src/model';

const defaultUser: () => User = () => {
  return {
    id: 'testuser',
    forname: 'John',
    surname: 'Doe',
  };
};

export const addDefaults = (objectToTransform: Partial<User>): User =>
  Object.assign(defaultUser(), objectToTransform);
