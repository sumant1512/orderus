import { IImage } from 'src/app/shared/interfaces/image.interface';

export interface IRoles extends IImage {
  id: number;
  name: string;
  description: string;
  status?: number;
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
