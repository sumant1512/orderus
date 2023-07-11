import { RestaurantDetailsEffects } from './restaurant-details/restaurant-details.effects';
import { RestaurantEffects } from './restaurant/restaurant.effects';

export const AppEffects = [RestaurantEffects, RestaurantDetailsEffects];
