/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import { uppercase } from '@nx-react-workspace/utils';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/express-api', (req, res) => {
  res.send({ message: `Welcome to ${uppercase('my-express-api')}!` });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/express-api`);
});
server.on('error', console.error);
