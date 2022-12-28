import { Request, NextFunction, DataItemResponse, DataTableResponse } from 'express';

export const emptyHandler = async (req: Request, res: DataItemResponse, next: NextFunction): Promise<void> => {
  /**
   * Handle data for empty response.
   */
  res.status(204);
  res.send('');

  next();
};

export const itemHandler =  async (req: Request, res: DataItemResponse, next: NextFunction): Promise<void> => {
  /**
   * Handle data for item response.
   */
  res.json(res.item ?? {});

  next();
};

export const tableHandler =  async (req: Request, res: DataTableResponse, next: NextFunction): Promise<void> => {
  /**
   * Handle data for table response.
   */
  res.setHeader('X-Per-Page-Items', String(res.perPageItems));
  res.setHeader('X-Total-Items', String(res.totalItems));
  res.json(res.pageItems ?? []);

  next();
};
