import { Response, UserRequest } from 'express';
import { find } from '../repositories/user.repository';
import { resolveTablePage } from '../services/db.service';

export const getUsers = async (req: UserRequest, res: Response): Promise<void> => {
  const {page = 1} = req.query;

  const tablePage = resolveTablePage(page);

  const users = await find(tablePage);

  res.json(users || []);
};
