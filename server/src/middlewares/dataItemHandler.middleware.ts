import { Request, NextFunction, DataItemResponse } from 'express';

export default async (req: Request, res: DataItemResponse, next: NextFunction): Promise<void> => {
  /**
   * Handle data for item response.
   */
  res.json(res.item ?? {});

  next();
};
