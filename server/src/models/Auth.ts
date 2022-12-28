export interface IAuthPayload {
  user: {
    id: string;
    email: string;
  };
}

export interface IAuthToken {
  token: string;
}
