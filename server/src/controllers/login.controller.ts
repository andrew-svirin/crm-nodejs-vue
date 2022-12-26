import { DataItemResponse, NextFunction, Request } from 'express';
import createError from 'http-errors';
import assert from 'assert';
import { createToken } from '../services/crypt.service';
import { authenticateLocal } from '../services/auth.service';
import { findOneByEmail } from '../repositories/user.repository';
import { IAuthPayload } from '../models/AuthPayload';

export const authenticateUser = async (req: Request, res: DataItemResponse, next: NextFunction): Promise<void> => {
  await authenticateLocal(
    async (email, password, done) => {
      try {
        const user = await findOneByEmail(email);

        if (!user || !user.validPassword(password)) {
          return done(null, false, {message: 'Email and Password are Incorrect'});
        }

        return done(null, user, {message: 'Logged In Successfully'});
      } catch (error) {
        done(error);
      }
    },
    (err, user, info, secret) => {
      assert.equal(null, err);

      if (!user) {
        return next(createError.BadRequest(info.message));
      }

      return req.login(user, {session: false}, async (error) => {
          if (error) return next(error);

          const payload: IAuthPayload = {
            user: {id: user._id, email: user.email},
          };

          const token = createToken(payload, String(secret));

          res.item = {token};

          next();
        }
      );
    }
  )(req, res);
};

export const refreshToken = (req: Request, res: DataItemResponse, next: NextFunction): void => {
  res.item = {message: 'NOT IMPLEMENTED: refreshToken'};

  next();
};
