import { ItemFilterEffects } from './item-filter/item-filter.effects';
import { OffersEffects } from './offers/offers.effects';
import { RegistrationEffects } from './registration/registration.effects';
import { CustomerEffects } from './customer/customer.effects';
import { RestaurantDetailsEffects } from './restaurant-details/restaurant-details.effects';
import { RestaurantEffects } from './restaurant/restaurant.effects';
import { UserInfoEffects } from './user-info/user-info.effects';
import { RestaurantReceivedOrdersEffects } from './restaurant-received-orders/restaurant-received-orders.effects';
import { PromotionEffects } from './promotion/promotion.effects';

export const AppEffects = [
  RestaurantEffects,
  RestaurantDetailsEffects,
  ItemFilterEffects,
  OffersEffects,
  UserInfoEffects,
  RegistrationEffects,
  CustomerEffects,
  RestaurantReceivedOrdersEffects,
  PromotionEffects,
];
