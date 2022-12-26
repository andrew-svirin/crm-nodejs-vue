import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export default (req: Request, res: Response, next: NextFunction): void => {
  /**
   * This middleware signals that route does not
   * response any data.
   * Put this middleware in the end of middleware
   * sequence.
   */

  if (res.headersSent) {
    return next();
  }

  next(createError.NotFound());
}
