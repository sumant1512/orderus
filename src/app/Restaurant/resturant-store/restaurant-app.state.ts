import { ICustomer } from '../customers+/customers-store/interfaces/customer.interface';
import { IRestaurantMenuState } from '../menu+/restaurant-menu-store/interfaces/restaurant-menu.interface';
import { IRestaurantReceivedOrdersState } from '../orders+/restaurant-received-orders-store/restaurant-received-orders.interface';
import { IRestaurantPromotionState } from '../promotions+/restaurant-promotions-store/interfaces/restaurant-promotions.interface';

export type RestaurantAppState = Partial<{
  restaurantReceivedOrders: IRestaurantReceivedOrdersState;
  customerList: Array<ICustomer>;
  restaurantMenu: IRestaurantMenuState;
  restaurantPromotions: IRestaurantPromotionState;
}>;
