import { ItemFilterEffects } from './item-filter/item-filter.effects';
import { OffersEffects } from './offers/offers.effects';
import { RegistrationEffects } from './registration/registration.effects';
import { RestaurantDetailsEffects } from './restaurant-details/restaurant-details.effects';
import { RestaurantEffects } from './restaurant/restaurant.effects';
import { UserInfoEffects } from './user-info/user-info.effects';
import { PromotionEffects } from './promotion/promotion.effects';

export const AppEffects = [
  RestaurantEffects,
  RestaurantDetailsEffects,
  ItemFilterEffects,
  OffersEffects,
  UserInfoEffects,
  RegistrationEffects,
  PromotionEffects,
];
