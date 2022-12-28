import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import { ServerUtil } from '../utils/server.util';
import { UserUtil } from '../utils/user.util';
import { authSchema } from '../schemas/login.schema';

chai.use(chaiJsonSchema);

const server = ServerUtil.create();

describe('Login routes', () => {
  before(async () => await ServerUtil.setup());
  after(async () => await ServerUtil.close());

  it('Return token on correct credentials', async () => {
    await UserUtil.deleteAll();

    const user = await UserUtil.create();

    await server
      .post('/login/authenticate-user')
      .send({email: user.email, password: 'admin_password'})
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({body}) => expect(body).to.be.jsonSchema(authSchema));
  });
});
