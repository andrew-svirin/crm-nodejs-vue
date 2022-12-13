import type User from '@/modules/user/types/User';

export default interface Profile {
  _id: string,
  user: typeof User,
  firstName: string,
  lastName: string,
  birthday?: Date;
}
