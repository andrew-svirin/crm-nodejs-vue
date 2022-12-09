#!/usr/bin/env node

import Fixtures from 'node-mongodb-fixtures';
import dotenv from 'dotenv';

dotenv.config();

const fixtures = new Fixtures({
  dir: 'fixtures',
});

fixtures.connect(String(process.env.DB_URI))
  .then(() => fixtures.unload())
  .then(() => fixtures.load())
  .then(() => fixtures.disconnect())
  .catch(err => console.log(err));
