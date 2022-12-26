import { Request, NextFunction, DataTableResponse } from 'express';

export default async (req: Request, res: DataTableResponse, next: NextFunction): Promise<void> => {
  /**
   * Handle data for table response.
   */
  res.setHeader('X-Per-Page-Items', String(res.perPageItems));
  res.setHeader('X-Total-Items', String(res.totalItems));
  res.json(res.pageItems ?? []);

  next();
};
