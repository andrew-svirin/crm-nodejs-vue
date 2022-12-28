import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import { ServerUtil } from '../utils/server.util';
import { UserUtil } from '../utils/user.util';
import { LoginUtil } from '../utils/login.util';
import { ProfileUtil } from '../utils/profile.util';
import { profileSchema } from '../schemas/profile.schema';

chai.use(chaiJsonSchema);

const server = ServerUtil.create();

describe('Profile routes', () => {
  before(async () => ServerUtil.setup());
  after(async () => await ServerUtil.close());

  it('Return profile for current account', async () => {
    await Promise.all([
      ProfileUtil.deleteAll(),
      UserUtil.deleteAll(),
    ]);

    const user = await UserUtil.create();

    const authorize = await LoginUtil.authorizeUser(user);

    await ProfileUtil.create({user: user._id});

    await server
      .get('/profile/get-current')
      .set('Authorization', `Bearer ${authorize.token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({body}) => expect(body).to.be.jsonSchema(profileSchema));
  });
});
