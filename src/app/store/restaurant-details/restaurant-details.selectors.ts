import { AppState } from '../app.state';
import { IRestaurantDetailsState } from './interfaces/restaurant.interface';

export const fetchRestaurantDetails = (state: AppState) =>
  state.restaurantDetails || ({} as IRestaurantDetailsState);
