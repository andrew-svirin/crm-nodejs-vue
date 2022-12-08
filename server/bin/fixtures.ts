#!/usr/bin/env node

import Fixtures from 'node-mongodb-fixtures'
import { getDbUri } from '../src/services/DbService';

const fixtures = new Fixtures({
  dir: 'fixtures',
});

fixtures.connect(getDbUri())
  .then(() => fixtures.unload())
  .then(() => fixtures.load())
  .then(() => fixtures.disconnect())
  .catch(err => console.log(err));
