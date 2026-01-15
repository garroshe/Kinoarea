export type LoginFieldsType = {
  email: string;
  password: string;
};

export type UserType = {
  uid: string;
  email: string;
  loginName?: string;
  lastName?: string;
  userName?: string;
  avatar?: string;
};

export type UserResponseType = {
  error: unknown | null;
  data: UserType | null;
};

export type UserPayloadType = {
  uid: string | null;
};
