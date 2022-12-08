import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export function createSaltAndHash (password: string): { salt: string, hash: string } {
  const salt = createSalt();

  const hash = createHash(password, salt);

  return {salt, hash};
}

export function createHash (password: string, salt: string): string {
  return crypto
    .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
    .toString('hex');
}

export function createSalt (): string {
  return crypto.randomBytes(16).toString('hex');
}

export function createToken (payload: {}): string {
  // TODO: Extract settings.
  return jwt.sign(payload, 'TOP_SECRET', {expiresIn: '2h'});
}
