import { IUserInfo, IUserInfoState } from './interfaces/user-info.interface';
import { UserInfoActions, UserInfoActionsUnion } from './user-info.actions';

export const initialUserInfoState: IUserInfoState = {
  userInfo: {} as IUserInfo,
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
    default:
      return state;
  }
}
