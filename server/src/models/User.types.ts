export interface User {
  name: string;
  email: string;
  hash?: string;
  salt?: string;
}
