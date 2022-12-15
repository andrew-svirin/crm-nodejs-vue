import User, { IUser } from '../../src/models/User';
import { ObjectId } from 'mongodb';
import { createSaltAndHash } from '../../src/services/crypt.service';

export namespace UserUtil {

  export const create = async (model: {} = {}): Promise<IUser> => {
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

  export const deleteAll = async (filter: {} = {}) => {
    User.deleteMany(filter);
  };

}
