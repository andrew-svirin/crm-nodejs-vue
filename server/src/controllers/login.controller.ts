import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';

exports.authorizeUser = (req: Request, res: Response, next: NextFunction) => {

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
    if (err || !user) {
      next(createError.BadRequest(info.message));
    }

    return req.login(user, {session: false}, async (error) => {
        if (error) return next(error);

        const payload = {user: {id: user.id, email: user.email}};
        // TODO: Extract settings.
        const token = jwt.sign(payload, 'TOP_SECRET', {expiresIn: '2h'});

        return res.json({token});
      }
    );
  })(req, res);
};

exports.refreshToken = (req: Request, res: Response) => {
  res.send('NOT IMPLEMENTED: refreshToken');
};
