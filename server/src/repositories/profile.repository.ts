import Profile, { IProfile } from '../models/Profile';

export const findOneByUser = async (user: string): Promise<IProfile | null> => {
  return Profile.findOne({user: user});
};
