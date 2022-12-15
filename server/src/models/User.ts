import { Document, model, Schema } from 'mongoose';
import { createHash, createSalt } from '../services/crypt.service';

export interface IUser extends Document {
  username: string;
  email: string;
  hash?: string;
  salt?: string;
  validPassword?: (password: string) => boolean;
}

const userSchema = new Schema<IUser>({
  username: {type: String, required: true},
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
