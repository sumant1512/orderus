import { IImage } from 'src/app/shared/interfaces/image.interface';
import { ECustomer } from '../enum/customer.enum';

export interface ICustomer extends IImage {
  [ECustomer.ID]: number;
  [ECustomer.FIRST_NAME]: string;
  [ECustomer.LAST_NAME]: string;
  [ECustomer.PHONE]: string;
  [ECustomer.EMAIL]: string;
  [ECustomer.LAST_ORDER_DATE]?: string;
  [ECustomer.TOTAL_ORDERS]: string;
  [ECustomer.TOTAL_AMOUNT]: string;
}

export interface ICustomerState {
  customerList: Array<ICustomer>;
}
