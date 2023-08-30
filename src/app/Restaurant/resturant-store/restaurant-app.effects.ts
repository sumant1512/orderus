import { CustomerEffects } from '../customers+/customers-store/customer.effects';
import { RestaurantMenuEffects } from '../menu+/restaurant-menu-store/restaurant-menu-items/restaurant-menu.effects';
import { RestaurantReceivedOrdersEffects } from '../orders+/restaurant-received-orders/restaurant-received-orders.effects';

export const RestaurantAppEffects = [
  RestaurantReceivedOrdersEffects,
  CustomerEffects,
  RestaurantMenuEffects,
];
