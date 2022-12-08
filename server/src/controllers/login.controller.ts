import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import assert from 'assert';
import { createToken } from '../services/CryptService';

exports.authenticateUser = (req: Request, res: Response, next: NextFunction) => {

  passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          const user = {id: 123, email, password};
          return done(null, user, {message: 'Logged In Successfully'});
        } catch (error) {
          done(error);
        }
      })
  );

  return passport.authenticate('local', {session: false}, (err, user, info) => {
    assert.equal(null, err);

    if (!user) {
      next(createError.BadRequest(info.message));
    }

    return req.login(user, {session: false}, async (error) => {
        if (error) return next(error);

        const payload = {
          user: {id: user.id, email: user.email},
        };

        const token = createToken(payload);

        return res.json({token});
      }
    );
  })(req, res);
};

exports.refreshToken = (req: Request, res: Response) => {
  res.send('NOT IMPLEMENTED: refreshToken');
};
