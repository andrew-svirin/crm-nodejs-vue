import { IUser } from './models/User';

declare module 'express' {
  interface Request {
    user?: IUser | undefined;
  }

  export interface UserRequest extends Request {
    user: IUser;
  }
}
