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
  ...(() => {
    const users: IUser[] = [];

    for (let i = 0; i < 100; i++) {
      users.push({
        _id: new ObjectId(),
        username: `faked_${i}`,
        email: `faked_${i}@email.test`,
        ...createSaltAndHash(`faked_${i}_password`)
      } as IUser);
    }

    return users;
  })()
];
