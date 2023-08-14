import { IRestaurantReceivedOrders } from './restaurant-received-orders/interfaces/restaurant-received-orders.interface';

export type OrdersAppState = Partial<{
  restaurantReceivedOrdersList: Array<IRestaurantReceivedOrders>;
}>;
