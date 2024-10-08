import { AppState } from '../app.state';
import {
  ITwoFactorAuth,
  IUserInfo,
  IUserBasicInfo,
  IAuthInfo,
} from './interfaces/user-info.interface';

export const fetchUserInfo = (state: AppState) =>
  state.userInfo?.userInfo as IUserInfo;

// export const fetchAuthInfo = (state: AppState) =>
//   state?.userInfo?.authToken as string;

export const fetchAuthInfo = (state: AppState) => {
  return {
    authToken: state?.userInfo?.authToken as string,
    roleId: state?.userInfo?.authToken || 0,
  } as IAuthInfo;
};

export const fetchUserBasicInfo = (state: AppState) => {
  return {
    id: state.userInfo?.userInfo.id,
    img: state.userInfo?.userInfo.img,
    imgAlt: state.userInfo?.userInfo.imgAlt,
    firstName: state.userInfo?.userInfo.firstName,
    lastName: state.userInfo?.userInfo.lastName,
    email: state.userInfo?.userInfo.email,
    phone: state.userInfo?.userInfo.phone,
    altPhone: state.userInfo?.userInfo.altPhone,
    emailNotification: state.userInfo?.userInfo.emailNotification,
  } as IUserBasicInfo;
};

export const fetchUserAddressList = (state: AppState) =>
  state.userInfo?.userInfo.addressList || [];

export const fetchUserPaymentList = (state: AppState) =>
  state.userInfo?.userInfo.paymentList || [];

export const fetchTwoFactorAuthInfo = (state: AppState) =>
  state.userInfo?.userInfo.twoFactorAuth as ITwoFactorAuth;
