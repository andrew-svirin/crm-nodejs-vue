import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { findOneById } from '../repositories/user.repository';
import { IAuthPayload } from '../models/Auth';
import assert from 'assert';
import { authenticateJwt } from '../services/auth.service';

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  /**
   * Authenticate user and check authentication is correct.
   */
  await authenticateJwt(
    async (jwt_payload: IAuthPayload, done) => {
      const user = await findOneById(jwt_payload.user.id);

      if (!user) {
        return done(null, false, {message: 'User not found'});
      }

      return done(null, user, {message: 'Logged In Successfully'});
    },
    (err, user, info) => {
      assert.equal(null, err);

      if (!user) {
        return next(createError.BadRequest(info.message));
      }

      return req.login(user, {session: false}, async (error: any) => {
          if (error) return next(error);

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
            return next(createError.Unauthorized());
          }

          next();
        }
      );
    }
  )(req, res);
};
