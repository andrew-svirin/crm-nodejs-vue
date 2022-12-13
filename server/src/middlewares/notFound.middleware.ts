import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

module.exports = (req: Request, res: Response, next: NextFunction) => {
  /**
   * This middleware signals that route does not
   * response any data.
   * Put this middleware in the end of middleware
   * sequence.
   */
  next(createError.NotFound());
};
