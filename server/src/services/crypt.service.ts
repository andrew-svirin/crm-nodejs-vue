import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { IAuthPayload, IAuthToken } from '../models/Auth';

export const createSaltAndHash = (password: string): { salt: string, hash: string } => {
  const salt = createSalt();

  const hash = createHash(password, salt);

  return {salt, hash};
};

export const createHash = (password: string, salt: string): string => crypto
  .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
  .toString('hex');

export const createSalt = (): string => crypto.randomBytes(16).toString('hex');

export const createToken = (payload: IAuthPayload, tokenSecret: string): IAuthToken => ({
  token: jwt.sign(
    payload,
    tokenSecret,
    {expiresIn: '2h'}
  )
});
