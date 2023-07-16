import { IRestaurantDetailsState } from './interfaces/restaurant-details.interface';
import {
  RestaurantDetailsActions,
  RestaurantDetailsActionsUnion,
} from './restaurant-details.actions';

export const initialRestaurantState: IRestaurantDetailsState =
  {} as IRestaurantDetailsState;

export function RestaurantDetailsReducer(
  state = initialRestaurantState,
  action: RestaurantDetailsActionsUnion
) {
  switch (action.type) {
    case RestaurantDetailsActions.FETCHED_RESTAURANT_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
