import { DataItemResponse, DataTableResponse, NextFunction, Request } from 'express';
import * as UserRepository from '../repositories/user.repository';
import { resolveTablePage } from '../services/db.service';
import { IUser } from '../models/User';
import { createSaltAndHash } from '../services/crypt.service';
import { ObjectId } from 'mongodb';

export const get = async (req: Request, res: DataItemResponse, next: NextFunction): Promise<void> => {
  res.item = await UserRepository.findOneById(req.params.id);

  next();
};

export const getList = async (req: Request, res: DataTableResponse, next: NextFunction): Promise<void> => {
  const {page = 1} = req.query;
  const perPage = 10;

  const tablePage = resolveTablePage(page);

  const [users, totalCount] = await Promise.all([
    UserRepository.find(tablePage, perPage),
    UserRepository.count(),
  ]) as [IUser[], number];

  res.perPageItems = perPage;
  res.pageItems = users;
  res.totalItems = totalCount;

  next();
};

export const create = async (req: Request, res: DataItemResponse, next: NextFunction): Promise<void> => {
  res.item = await UserRepository.create({
    _id: new ObjectId(),
    email: req.body.email,
    username: req.body.username,
    ...createSaltAndHash(req.body.password),
  } as IUser);

  next();
};
