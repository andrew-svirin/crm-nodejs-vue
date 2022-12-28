import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import { ServerUtil } from '../utils/server.util';
import { UserUtil } from '../utils/user.util';
import { LoginUtil } from '../utils/login.util';
import { userSchema, usersSchema } from '../schemas/user.schema';

chai.use(chaiJsonSchema);

const server = ServerUtil.create();

describe('User routes', () => {
  before(async () => ServerUtil.setup());
  after(async () => await ServerUtil.close());

  it('Return user by id', async () => {
    await UserUtil.deleteAll();

    const user = await UserUtil.create();

    const authorize = await LoginUtil.authorizeUser(user);

    await server
      .get(`/user/${user._id}/get`)
      .set('Authorization', `Bearer ${authorize.token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({body}) => expect(body).to.be.jsonSchema(userSchema));
  });

  it('Return users by page', async () => {
    await UserUtil.deleteAll();

    const [user] = await Promise.all([
      UserUtil.create(),
      UserUtil.create({username: 'fake_1', email: 'fake_1@test.test'}),
      UserUtil.create({username: 'fake_1', email: 'fake_1@test.test'})
    ]);

    const authorize = await LoginUtil.authorizeUser(user);

    await server
      .get(`/user/get-list?page=1`)
      .set('Authorization', `Bearer ${authorize.token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({body}) => expect(body).to.be.an('array').length(3))
      .expect(({body}) => expect(body).to.be.jsonSchema(usersSchema));
  });

  it('Return user after create', async () => {
    await UserUtil.deleteAll();

    const user = await UserUtil.create();

    const authorize = await LoginUtil.authorizeUser(user);

    await server
      .post(`/user/create`)
      .set('Authorization', `Bearer ${authorize.token}`)
      .send({username: 'fake_1', email: 'fake_1@test.test', password: 'fake_password'})
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({body}) => expect(body).to.be.jsonSchema(userSchema));
  });
});
