import { ICustomer } from '../customers+/customers-store/interfaces/customer.interface';
import { IRestaurantMenu } from '../menu+/restaurant-menu-store/restaurant-menu-items/interfaces/restaurant-menu.interface';
import { IRestaurantReceivedOrdersState } from '../orders+/restaurant-received-orders/restaurant-received-orders.interface';

export type RestaurantAppState = Partial<{
  restaurantReceivedOrders: IRestaurantReceivedOrdersState;
  customerList: Array<ICustomer>;
  restaurantMenu: IRestaurantMenu;
}>;
