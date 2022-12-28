import { DataItemResponse, NextFunction, Request } from 'express';
import createError from 'http-errors';
import assert from 'assert';
import { createToken } from '../services/crypt.service';
import { authenticateLocal, createPayload } from '../services/auth.service';
import { findOneByEmail } from '../repositories/user.repository';

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

          res.item = createToken(createPayload(user), String(secret));

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
