import Profile, { IProfile } from '../models/Profile';

export const findOneByUser = async (user: string): Promise<IProfile | null> => Profile.findOne({user: user});
