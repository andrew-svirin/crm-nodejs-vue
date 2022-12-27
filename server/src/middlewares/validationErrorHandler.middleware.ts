import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { validationResult } from 'express-validator';

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    next(Object.assign(createError.UnprocessableEntity(), {errors: errors.array()}));
  }

  next();
}
