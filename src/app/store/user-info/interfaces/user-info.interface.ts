import { IImage } from 'src/app/shared/interfaces/image.interface';

export interface IUserInfo {
  userImage: IImage;
  firstName: string;
  lastName: string;
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
