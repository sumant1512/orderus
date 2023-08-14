import { ICustomer } from './customer/interfaces/customer.interface';

export type CustomersAppState = Partial<{
  customerList: Array<ICustomer>;
}>;
