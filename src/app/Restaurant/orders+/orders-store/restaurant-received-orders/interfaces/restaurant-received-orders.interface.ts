import {
  ERestaurantDeliveryOrderStatus,
  ERestaurantReceivedOrders,
} from '../enum/restaurant-received-orders.enum';

export interface IRestaurantReceivedOrders {
  [ERestaurantReceivedOrders.ORDER_ID]: number;
  [ERestaurantReceivedOrders.FIRST_NAME]: string;
  [ERestaurantReceivedOrders.LAST_NAME]: string;
  [ERestaurantReceivedOrders.ADDRESS_1]: string;
  [ERestaurantReceivedOrders.ADDRESS_2]: string;
  [ERestaurantReceivedOrders.CITY]: string;
  [ERestaurantReceivedOrders.STATE]: string;
  [ERestaurantReceivedOrders.COUNTRY]: string;
  [ERestaurantReceivedOrders.PIN_CODE]: string;
  [ERestaurantReceivedOrders.ORDER_DATE]?: string;
  [ERestaurantReceivedOrders.STATUS]: ERestaurantDeliveryOrderStatus;
  [ERestaurantReceivedOrders.TOTAL_AMOUNT]: string;
}

export interface IRestaurantReceivedOrdersState {
  activeRestaurantReceivedOrdersList: Array<IRestaurantReceivedOrders>;
  openRestaurantReceivedOrdersList: Array<IRestaurantReceivedOrders>;
  deliveredRestaurantReceivedOrdersList: Array<IRestaurantReceivedOrders>;
}
