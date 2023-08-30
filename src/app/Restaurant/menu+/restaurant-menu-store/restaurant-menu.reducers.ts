import { IRestaurantMenuState } from './interfaces/restaurant-menu.interface';
import {
  RestaurantMenuActions,
  RestaurantMenuActionsUnion,
} from './restaurant-menu.actions';

export const initialRestaurantMenuState: IRestaurantMenuState = {
  restaurantMenuItemList: [],
  restaurantMenuCategoriesList: [],
};

export function RestaurantMenuReducer(
  state = initialRestaurantMenuState,
  action: RestaurantMenuActionsUnion
) {
  switch (action.type) {
    case RestaurantMenuActions.FETCHED_RESTAURANT_MENU_ITEMS:
      return { ...state, restaurantMenuItemList: action.payload };
    case RestaurantMenuActions.FETCHED_RESTAURANT_MENU_CATEGORIES:
      return { ...state, restaurantMenuCategoriesList: action.payload };
    default:
      return state;
  }
}
