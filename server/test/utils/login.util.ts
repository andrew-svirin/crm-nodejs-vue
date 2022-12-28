import { IUser } from '../../src/models/User';
import { IAuthToken } from '../../src/models/Auth';
import { createToken } from '../../src/services/crypt.service';
import { createPayload } from '../../src/services/auth.service';

const tokenSecret = (): string => String(process.env.TOKEN_SECRET);

export namespace LoginUtil {

  export const authorizeUser = async (user: IUser): Promise<IAuthToken> =>
    createToken(createPayload(user), String(tokenSecret()));
}
