import { Response, UserRequest } from 'express';
import { findOneByUser } from '../repositories/profile.repository';

export const getProfile = async (req: UserRequest, res: Response) => {
  const profile = await findOneByUser(req.user._id);

  res.json(profile);
};
