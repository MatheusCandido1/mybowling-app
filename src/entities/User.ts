export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  push_token: string;
  profile: {
    first_access: boolean;
  },
  access_token: string;
}
