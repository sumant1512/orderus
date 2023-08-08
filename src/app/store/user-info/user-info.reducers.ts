import { IUserInfo, IUserInfoState } from './interfaces/user-info.interface';
import { UserInfoActions, UserInfoActionsUnion } from './user-info.actions';

export const initialUserInfoState: IUserInfoState = {
  userInfo: {} as IUserInfo,
  authToken: '',
  roleId: 0,
  userName: '',
};

export function UserInfoReducer(
  state = initialUserInfoState,
  action: UserInfoActionsUnion
) {
  switch (action.type) {
    case UserInfoActions.FETCHED_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case UserInfoActions.LOGGED_IN:
      return {
        ...state,
        authToken: action.payload.authToken,
        roleId: action.payload.roleId,
      };
    case UserInfoActions.LOGGED_OUT:
      return initialUserInfoState;
    default:
      return state;
  }
}
