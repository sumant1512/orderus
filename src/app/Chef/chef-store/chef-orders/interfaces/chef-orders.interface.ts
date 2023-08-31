import { EChefOrderStatus, EChefOrders } from '../enum/chef-orders.enum';

export interface IChefOrders {
  [EChefOrders.ORDER_ID]: number;
  [EChefOrders.FIRST_NAME]: string;
  [EChefOrders.LAST_NAME]: string;
  [EChefOrders.ADDRESS_1]: string;
  [EChefOrders.ADDRESS_2]: string;
  [EChefOrders.CITY]: string;
  [EChefOrders.STATE]: string;
  [EChefOrders.COUNTRY]: string;
  [EChefOrders.PIN_CODE]: string;
  [EChefOrders.ORDER_DATE]?: string;
  [EChefOrders.STATUS]: EChefOrderStatus;
  [EChefOrders.TOTAL_AMOUNT]: string;
}

export interface IChefOrdersState {
  activeOrdersList: Array<IChefOrders>;
  openOrdersList: Array<IChefOrders>;
  deliveredOrdersList: Array<IChefOrders>;
}
