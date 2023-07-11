import { IRestaurantState } from './interfaces/restaurant.interface';
import {
  RestaurantActions,
  RestaurantActionsUnion,
} from './restaurant.actions';

export const initialRestaurantState: IRestaurantState = {
  restaurantList: [],
};

export function RestaurantReducer(
  state = initialRestaurantState,
  action: RestaurantActionsUnion
) {
  switch (action.type) {
    case RestaurantActions.FETCHED_RESTAURANTS:
      return {
        ...state,
        restaurantList: action.payload,
      };
    default:
      return state;
  }
}
