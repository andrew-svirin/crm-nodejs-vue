import { Config } from '../../src/services/config.service';
import { Db } from '../../src/services/db.service';
import supertest from 'supertest';
import app from '../../src/app';

export namespace ServerUtil {
  export const create = () => supertest(app);

  export const setup = async (): Promise<void> => {
    Config.load();
    await Db.connect();
  };

  export const close = async (): Promise<void> => {
    await Db.disconnect();
  };
}
