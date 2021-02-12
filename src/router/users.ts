import { json, Router } from 'express';
import { IUsermanagementBackend } from '../backend';
import { User } from '../model';

export function getUserRouter(backend: IUsermanagementBackend): Router {
  const router = Router();
  router.use(json());

  router.get('/users', (req, res) => {
    const [result, usersOrError] = backend.listUsers();
    if (result) {
      res.send(usersOrError);
    } else {
      res.status(500).send('error occured');
      // todo use logger
      console.log(`Error: ${(usersOrError as Error).message}`);
    }
  });

  router.post('/users', (req, res) => {
    const user = req.body as User;
    const [result, userCreatedOrError] = backend.createUser(user);
    if (result) {
      res.status(201).send(userCreatedOrError as User);
    } else {
      res.status(500).send('error occured');
      // todo use logger
      console.log(`Error: ${(userCreatedOrError as Error).message}`);
    }
  });

  router.delete('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const [result, userDeletedOrError] = backend.deleteUser(userId);
    if (result) {
      res.status(204).send();
    } else {
      res.status(500).send('error occured');
      // todo use logger
      console.log(`Error: ${(userDeletedOrError as Error).message}`);
    }
  });

  return router;
}
