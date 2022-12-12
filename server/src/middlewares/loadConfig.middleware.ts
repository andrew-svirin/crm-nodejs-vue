import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

module.exports = (req: Request, res: Response, next: NextFunction) => {
  /**
   * Load config settings for application.
   */

  dotenv.config();

  next();
};
