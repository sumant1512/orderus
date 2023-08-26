import { EAdmin } from '../enum/admin-registration.enum';

export interface IAdmin {
  [EAdmin.ID]: number;
  [EAdmin.NAME]: string;
  [EAdmin.USER_NAME]: string;
  [EAdmin.PASSWORD]: string;
  [EAdmin.TOKEN]: string;
  [EAdmin.STATUS]: string;
  [EAdmin.CREATED_ON]: string;
  [EAdmin.LAST_UPDATED_ON]: string;
}
