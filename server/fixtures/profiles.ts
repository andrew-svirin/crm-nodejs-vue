import { ObjectId } from 'mongodb';
import { IProfile } from '../src/models/Profile';

const users = require('./users');

module.exports = [
  {
    _id: new ObjectId(),
    user: users[0]._id,
    firstName: 'John',
    lastName: 'Doe',
    birthday: new Date('2010-10-10')
  } as IProfile,
  {
    _id: new ObjectId(),
    user: users[1]._id,
    firstName: 'Test',
    lastName: 'Tester',
    birthday: new Date('2008-05-05')
  } as IProfile,
];
