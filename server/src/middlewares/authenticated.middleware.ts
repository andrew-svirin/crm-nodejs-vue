import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import passport from 'passport';

module.exports = (req: Request, res: Response, next: NextFunction) => {

  passport.authenticate('jwt', {session: false});

  /**
   * If the incoming request contains proper cookies,
   * 'passport' module will parse the cookies and put the
   * req.user object as the user logged in.
   *
   * Note however that this functionality is strictly limited to 'passport'
   * module which is not included in this boilerplate code.
   *
   * Based on your api and session management configurations,
   * you might want to check req.session.id ( in case of cookies )
   * or req.headers['x-access-token'] and then validate the request
   */
  if (!req.user) {
    next(createError.Unauthorized());
  }

  next();
};
