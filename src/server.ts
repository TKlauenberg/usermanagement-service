import * as express from 'express';
import { IUsermanagementBackend } from './backend';
import { getUserRouter } from './router';

export function getServers(
  usermanagementBackend: IUsermanagementBackend,
): express.Express {
  const app = express();

  app.use('/api/v1', getUserRouter(usermanagementBackend));

  return app;
}
