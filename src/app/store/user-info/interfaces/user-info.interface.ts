import { IImage } from 'src/app/shared/interfaces/image.interface';

export interface IUserInfoState extends IAuthInfo {
  userInfo: IUserInfo;
}

export interface IUserInfo extends IUserBasicInfo {
  addressList: Array<IAddress>;
  paymentList: Array<IPayment>;
  twoFactorAuth: ITwoFactorAuth;
}

export interface IUserBasicInfo {
  id: number;
  img: string;
  imgAlt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  altPhone: string;
  emailNotification: Array<INotifcation>;
}

export interface IAuthInfo {
  userName: string;
  authToken: string;
  roleId: number;
}

export interface INotifcation {
  id: number;
  name: string;
  status: boolean;
}

export interface IAddress extends IImage {
  id: number;
  country: string;
  state: string;
  city: string;
  address1: string;
  address2: string;
  pinCode: string;
}

export interface IPayment {
  id: number;
  cardNumber: string;
  expiryDate: string;
  cardHolerName: string;
  cardType: string;
}

export interface ITwoFactorAuth {
  isActive: boolean;
  phone: string;
}

export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface IUserInfoRequestBody {
  userName: string;
  authToken: string;
}
