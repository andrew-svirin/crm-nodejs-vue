import User, { IUser } from '../models/User';

export const findOneByEmail = async (email: string): Promise<IUser | null> => {
  return User.findOne({email});
};
