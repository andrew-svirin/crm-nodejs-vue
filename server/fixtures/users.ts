import { ObjectId } from 'mongodb';
import { createSaltAndHash } from '../src/services/crypt.service';
import { IUser } from '../src/models/User';

module.exports = [
  {
    _id: new ObjectId(),
    username: 'admin',
    email: 'admin@email.test',
    ...createSaltAndHash('admin_password')
  } as IUser,
  {
    _id: new ObjectId(),
    username: 'test',
    email: 'test@email.test',
    ...createSaltAndHash('test_password')
  } as IUser,
];
