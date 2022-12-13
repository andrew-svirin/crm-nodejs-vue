import { NextFunction, Request, Response } from 'express';
import { connect } from '../services/db.service';

module.exports = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * Make single connection to database.
   * To handle all requests in one single connection.
   * In medium systems it is usually enough.
   */

  await connect();

  next();
};
