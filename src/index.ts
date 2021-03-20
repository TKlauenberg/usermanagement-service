import * as config from 'config';
import { UsermanagementMock } from '../features/stepdefs/support/mocks';
import { getServers } from './server';

// todo use with implemented backend

const server = getServers(new UsermanagementMock());
const port = Number.parseInt(config.get('port'));
server.listen(port, () => {
  // todo logger needed
  console.log(`server listens on port ${port}`);
});
