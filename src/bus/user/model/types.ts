export interface ILoginFields {
  email: string;
  password: string;
}

export interface IUser {
  uid: string;
  email: string;
  loginName?: string;
  lastName?: string;
  userName?: string;
  avatar?: string;
}

export type IUserResponse = {
  error: unknown | null;
  data: IUser | null;
};

export interface IUserPayload {
  uid: string | null;
}
