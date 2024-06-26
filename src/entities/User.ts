export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  push_token: string;
  notifications_not_read: number;
  profile: {
    first_access: boolean;
    city: string;
    state: string;
  },
  access_token: string;
}
