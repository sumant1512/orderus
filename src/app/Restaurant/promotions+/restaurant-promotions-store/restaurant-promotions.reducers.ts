import { IRestaurantPromotionState } from './interfaces/restaurant-promotions.interface';
import {
  RestaurantPromotionsActions,
  RestaurantPromotionsActionsUnion,
} from './restaurant-promotions.actions';

export const initialRestaurantPromotionsState: IRestaurantPromotionState = {
  activeRestaurantPromotionsList: [],
  scheduledRestaurantPromotionsList: [],
  expiredRestaurantPromotionsList: [],
};

export function RestaurantPromotionsReducer(
  state = initialRestaurantPromotionsState,
  action: RestaurantPromotionsActionsUnion
) {
  switch (action.type) {
    case RestaurantPromotionsActions.FETCHED_RESTAURANT_ACTIVE_PROMOTIONS:
      return { ...state, activeRestaurantPromotionsList: action.payload };
    case RestaurantPromotionsActions.FETCHED_RESTAURANT_SCHEDULED_PROMOTIONS:
      return { ...state, scheduledRestaurantPromotionsList: action.payload };
    case RestaurantPromotionsActions.FETCHED_RESTAURANT_EXPIRED_PROMOTIONS:
      return { ...state, expiredRestaurantPromotionsList: action.payload };

    default:
      return state;
  }
}
