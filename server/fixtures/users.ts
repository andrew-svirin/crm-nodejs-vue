import { ObjectId } from 'mongodb';
import { createSaltAndHash } from '../src/services/crypt.service';

module.exports = [
  {_id: new ObjectId(), username: 'admin', email: 'admin@email.test', ...createSaltAndHash('admin_password')},
  {_id: new ObjectId(), username: 'test', email: 'test@email.test', ...createSaltAndHash('test_password')},
];
