import { IUser } from './models/User';
import * as Express from 'express';
import * as Core from 'express-serve-static-core';

declare module 'express' {
  export interface Request extends Express.Request, Core.Request {
    user?: IUser | undefined;
  }

  export interface DataTableResponse extends Express.Response, Core.Response {
    pageItems?: any[];
    perPageItems?: number;
    totalItems?: number;
  }

  export interface DataItemResponse extends Express.Response, Core.Response {
    item?: any;
  }
}

declare module 'express-serve-static-core' {
  export interface Request extends Core.Request {
    user?: IUser | undefined;
  }
}
