/// <reference types="node" />

import { IUser } from './models/User';
import { Request as ExpressRequest } from 'express';
import { Request as CoreRequest } from 'express-serve-static-core';

declare module 'express' {
  export interface Request extends ExpressRequest {
    user?: IUser | undefined;
  }

  export interface UserRequest extends ExpressRequest {
    user?: IUser;
  }
}

declare module 'express-serve-static-core' {
  export interface Request extends CoreRequest {
    user?: IUser | undefined;
  }
}
