import { Schema, model } from 'mongoose';
import type { User } from './User.types';
import { createHash, createSalt } from '../services/CryptService';

const userSchema = new Schema<User>({
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

userSchema.methods.validPassword = function (password): boolean {
  const hash = createHash(password, this.salt);

  return this.hash === hash;
};

model('User', userSchema);
