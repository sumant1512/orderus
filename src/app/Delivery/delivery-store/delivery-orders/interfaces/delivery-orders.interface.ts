import {
  EDeliveryOrderStatus,
  EDeliveryOrders,
} from '../enum/delivery-orders.enum';

export interface IDeliveryOrders {
  [EDeliveryOrders.ORDER_ID]: number;
  [EDeliveryOrders.FIRST_NAME]: string;
  [EDeliveryOrders.LAST_NAME]: string;
  [EDeliveryOrders.ADDRESS_1]: string;
  [EDeliveryOrders.ADDRESS_2]: string;
  [EDeliveryOrders.CITY]: string;
  [EDeliveryOrders.STATE]: string;
  [EDeliveryOrders.COUNTRY]: string;
  [EDeliveryOrders.PIN_CODE]: string;
  [EDeliveryOrders.ORDER_DATE]?: string;
  [EDeliveryOrders.STATUS]: EDeliveryOrderStatus;
  [EDeliveryOrders.TOTAL_AMOUNT]: string;
}

export interface IDeliveryOrdersState {
  activeOrdersList: Array<IDeliveryOrders>;
  openOrdersList: Array<IDeliveryOrders>;
  deliveredOrdersList: Array<IDeliveryOrders>;
}
