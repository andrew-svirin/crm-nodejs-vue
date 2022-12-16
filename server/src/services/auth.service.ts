import passport from 'passport';
import { Strategy as LocalStrategy, VerifyFunction } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy, VerifyCallback } from 'passport-jwt';

const tokenSecret = (): string => String(process.env.TOKEN_SECRET);

export const authenticateJwt = (verify: VerifyCallback, callback: (...args: any[]) => any): Function =>
  passport.authenticate(
    new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: tokenSecret(),
    }, verify),
    {session: false},
    callback
  );

export const authenticateLocal = (verify: VerifyFunction, callback: (...args: any[]) => any): Function =>
  passport.authenticate(
    new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, verify),
    {session: false},
    (...args) => callback(...args, tokenSecret())
  );
