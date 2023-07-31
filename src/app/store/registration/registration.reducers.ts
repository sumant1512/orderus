import { IRegistrationState } from './interfaces/registration.interface';
import {
  RegistrationActions,
  RegistrationActionsUnion,
} from './registration.actions';

export const initialRolesState: IRegistrationState = {
  rolesList: [],
};

export function RegistrationReducer(
  state = initialRolesState,
  action: RegistrationActionsUnion
) {
  switch (action.type) {
    case RegistrationActions.FETCHED_ROLES:
      return {
        ...state,
        rolesList: action.payload,
      };
    default:
      return state;
  }
}
