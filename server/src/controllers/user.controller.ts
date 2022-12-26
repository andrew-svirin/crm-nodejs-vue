import { DataTableResponse, NextFunction, Request } from 'express';
import { count, find } from '../repositories/user.repository';
import { resolveTablePage } from '../services/db.service';
import { IUser } from '../models/User';

export const getList = async (req: Request, res: DataTableResponse, next: NextFunction): Promise<void> => {
  const {page = 1} = req.query;
  const perPage = 10;

  const tablePage = resolveTablePage(page);

  const [users, totalCount] = await Promise.all([
    find(tablePage, perPage),
    count(),
  ]) as [IUser[], number];

  res.perPageItems = perPage;
  res.pageItems = users;
  res.totalItems = totalCount;

  next();
};
