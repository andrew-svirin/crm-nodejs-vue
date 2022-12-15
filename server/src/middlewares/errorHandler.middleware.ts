import { NextFunction, Request, Response } from 'express';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  /**
   * The last middleware that handle errors.
   */

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
};
