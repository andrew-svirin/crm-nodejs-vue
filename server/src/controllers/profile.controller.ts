import { DataItemResponse, NextFunction, Request } from 'express';
import { findOneByUser } from '../repositories/profile.repository';

export const getProfile = async (req: Request, res: DataItemResponse, next: NextFunction): Promise<void> => {
  res.item = await findOneByUser(req.user?._id);

  next();
};
