import { model, Schema } from 'mongoose';
import User from './User';

export interface IProfile {
  user: typeof User;
  firstName: string;
  lastName: string;
  birthday?: Date;
}

const profileSchema = new Schema<IProfile>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  birthday: Date
}, {
  timestamps: true
});

const profile = model('Profile', profileSchema);

export default profile;
