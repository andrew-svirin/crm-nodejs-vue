import { describe, it } from 'mocha';
import supertest from 'supertest';
import { expect } from 'chai';
import { ServerUtil } from '../utils/server.util';
import { UserUtil } from '../utils/user.util';
import app from '../../src/app';

const server = supertest(app);

describe('Login routes', () => {
  before(async () => {
    await ServerUtil.setup();
  });
  after(async () => {
    await ServerUtil.close();
  });

  it('Return token on correct credentials', async () => {

    await UserUtil.deleteAll();

    await UserUtil.create();

    server
      .post('/login/authenticate-user')
      .send({email: 'admin@email.test', password: 'admin_password'})
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body).has.property('token');
      })
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
