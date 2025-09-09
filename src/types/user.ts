import { CustomReponseType } from './customReponseType';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  avatar: string;
  gender: string;
  role: string;
};

export type TypeUserData = CustomReponseType<User>;
