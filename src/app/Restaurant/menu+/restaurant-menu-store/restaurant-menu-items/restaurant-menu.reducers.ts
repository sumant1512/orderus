import { IRestaurantMenu } from './interfaces/restaurant-menu.interface';
import {
  RestaurantMenuActions,
  RestaurantMenuActionsUnion,
} from './restaurant-menu.actions';

export const initialRestaurantMenuState: IRestaurantMenu = {
  restaurantMenuItemList: [],
};

export function RestaurantMenuReducer(
  state = initialRestaurantMenuState,
  action: RestaurantMenuActionsUnion
) {
  switch (action.type) {
    case RestaurantMenuActions.FETCHED_RESTAURANT_MENU_ITEMS:
      return { ...state, restaurantMenuItemList: action.payload };
    default:
      return state;
  }
}
