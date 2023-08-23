import { IRestaurantReceivedOrdersState } from './restaurant-received-orders/interfaces/restaurant-received-orders.interface';

export type OrdersAppState = Partial<{
  restaurantReceivedOrders: IRestaurantReceivedOrdersState;
}>;
