import { describe, it } from 'mocha';
import { expect } from 'chai';
import { ServerUtil } from '../utils/server.util';
import { UserUtil } from '../utils/user.util';
import { LoginUtil } from '../utils/login.util';
import { ProfileUtil } from '../utils/profile.util';

const server = ServerUtil.create();

describe('Profile routes', () => {
  before(async () => ServerUtil.setup());
  after(async () => await ServerUtil.close());

  it('Return profile for current account', async () => {

    await ProfileUtil.deleteAll();

    await UserUtil.deleteAll();

    const user = await UserUtil.create();

    const authorize = await LoginUtil.authorizeUser(user);

    await ProfileUtil.create({user: user._id});

    await server
      .get('/profile/get-current')
      .set('Authorization', `Bearer ${authorize.token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body).that.includes.all.keys(['_id', 'user', 'firstName', 'lastName', 'birthday']);
      });
  });
});
