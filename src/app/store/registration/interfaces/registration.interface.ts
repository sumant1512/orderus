export interface IRoles {
  id: number;
  name: string;
  description: string;
  img: string;
  imgAlt: string;
}

export interface IRegistrationState {
  rolesList: Array<IRoles>;
}

export interface IRegistrationRequestBody {
  name: string;
  userName: string;
  email: string;
  password: string;
  roleId: number;
  phone: string;
}

export interface IVerifyRequestBody {
  userName: string;
  code: string;
}
