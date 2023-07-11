import { IRestaurantState } from './restaurants/interfaces/restaurant.interface';

export type AppState = Partial<{
  restaurant: IRestaurantState;
}>;
