import Profile, { IProfile } from '../../src/models/Profile';
import { ObjectId } from 'mongodb';
import { IUser } from '../../src/models/User';

export namespace ProfileUtil {

  export const create = async (model: { user: IUser, [key: keyof IProfile]: any }): Promise<IProfile> => {
    const defaultModel = {
      _id: new ObjectId(),
      firstName: 'John',
      lastName: 'Doe',
      birthday: new Date('10-12-1990'),
    } as IProfile;

    const profile: IProfile = new Profile(Object.assign(defaultModel, model));

    await profile.save();

    return profile;
  };

  export const deleteAll = async (filter: {} = {}): Promise<void> => Profile.deleteMany(filter);
}
