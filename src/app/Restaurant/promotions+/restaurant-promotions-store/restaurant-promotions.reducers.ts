import { IRestaurantPromotions } from './interfaces/restaurant-promotions.interface';
import {
  RestaurantPromotionsActions,
  RestaurantPromotionsActionsUnion,
} from './restaurant-promotions.actions';

export const initialRestaurantPromotionsState: Array<IRestaurantPromotions> =
  [];

export function RestaurantPromotionsReducer(
  state = initialRestaurantPromotionsState,
  action: RestaurantPromotionsActionsUnion
) {
  switch (action.type) {
    case RestaurantPromotionsActions.FETCHED_RESTAURANT_PROMOTIONS:
      return action.payload;

    default:
      return state;
  }
}
