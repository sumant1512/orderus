import { CustomerEffects } from '../customers+/customers-store/customer.effects';
import { RestaurantMenuEffects } from '../menu+/restaurant-menu-store/restaurant-menu.effects';
import { RestaurantReceivedOrdersEffects } from '../orders+/restaurant-received-orders-store/restaurant-received-orders.effects';
import { RestaurantPromotionsEffects } from '../promotions+/restaurant-promotions-store/restaurant-promotions.effects';

export const RestaurantAppEffects = [
  RestaurantReceivedOrdersEffects,
  CustomerEffects,
  RestaurantMenuEffects,
  RestaurantPromotionsEffects,
];
