import { Schema, model } from 'mongoose';
import { createHash, createSalt } from '../services/crypt.service';

export interface IUser {
  name: string;
  email: string;
  hash?: string;
  salt?: string;
}

const userSchema = new Schema<IUser>({
  name: {type: String, required: true},
  email: {type: String, required: true},
  hash: String,
  salt: String
}, {
  timestamps: true
});

userSchema.virtual('password').set(function (password) {
  this.salt = createSalt();

  this.hash = createHash(password, this.salt);
});

userSchema.methods.validPassword = function (password: string): boolean {
  const hash = createHash(password, this.salt);

  return this.hash === hash;
};

const user = model('User', userSchema);

export default user;

