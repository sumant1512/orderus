import { IRestaurantDetailsState } from './restaurant-details/interfaces/restaurant.interface';
import { IRestaurantState } from './restaurant/interfaces/restaurant.interface';

export type AppState = Partial<{
  restaurant: IRestaurantState;
  restaurantDetails: IRestaurantDetailsState;
}>;
