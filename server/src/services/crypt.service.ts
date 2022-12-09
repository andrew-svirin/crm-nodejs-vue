import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export const createSaltAndHash = (password: string): { salt: string, hash: string } => {
  const salt = createSalt();

  const hash = createHash(password, salt);

  return {salt, hash};
};

export const createHash = (password: string, salt: string): string => {
  return crypto
    .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
    .toString('hex');
};

export const createSalt = (): string => {
  return crypto.randomBytes(16).toString('hex');
};

export const createToken = (payload: {}): string => {
  return jwt.sign(
    payload,
    String(process.env.TOKEN_SECRET),
    {expiresIn: '2h'}
  );
};
