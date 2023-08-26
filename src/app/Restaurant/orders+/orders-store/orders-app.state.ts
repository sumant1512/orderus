import { IRestaurantReceivedOrdersState } from './restaurant-received-orders/restaurant-received-orders.interface';

export type OrdersAppState = Partial<{
  restaurantReceivedOrders: IRestaurantReceivedOrdersState;
}>;
