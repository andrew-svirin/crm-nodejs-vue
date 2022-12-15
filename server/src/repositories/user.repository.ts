import User, { IUser } from '../models/User';

export const findOneByEmail = async (email: string): Promise<IUser | null> => User.findOne({email});

export const findOneById = async (id: string): Promise<IUser | null> => User.findOne({_id: id});

export const find = async (page: number, perPage: number = 10): Promise<IUser[]> =>
  User.find().skip(perPage * page).limit(perPage).exec();
