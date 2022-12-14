import User, { IUser } from '../../src/models/User';
import { ObjectId } from 'mongodb';
import { createSaltAndHash } from '../../src/services/crypt.service';
import { ICredentials } from './utils';

export namespace UserUtil {

  export const create = async (model: { [key: keyof IUser]: any } = {}): Promise<IUser & ICredentials> => {
    const defaultModel = {
      _id: new ObjectId(),
      username: 'admin',
      email: 'admin@email.test',
      ...createSaltAndHash('admin_password')
    } as IUser;

    const user: IUser = new User(Object.assign(defaultModel, model));

    await user.save();

    return user;
  };

  export const deleteAll = async (filter: {} = {}): Promise<void> => User.deleteMany(filter);
}
