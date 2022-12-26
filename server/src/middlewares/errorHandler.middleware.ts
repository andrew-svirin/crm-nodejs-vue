import { NextFunction, Request, Response } from 'express';

export default (err: any, req: Request, res: Response, next: NextFunction): void => {
  /**
   * The last middleware that handle errors.
   */

  if (res.headersSent) {
    return next(err);
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') !== 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
};
