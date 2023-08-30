import { Action } from '@ngrx/store';
import { IRestaurantMenuItem } from './interfaces/restaurant-menu.interface';

export enum RestaurantMenuActions {
  FETCH_RESTAURANT_MENU_ITEMS = '[RestaurantMenu] Fetch Restaurant Menu Items',
  FETCHED_RESTAURANT_MENU_ITEMS = '[RestaurantMenu] Fetched Restaurant Menu Items',
}

export class FetchRestaurantMenuItems implements Action {
  readonly type = RestaurantMenuActions.FETCH_RESTAURANT_MENU_ITEMS;
}

export class FetchedRestaurantMenuItems implements Action {
  readonly type = RestaurantMenuActions.FETCHED_RESTAURANT_MENU_ITEMS;
  constructor(public payload: IRestaurantMenuItem[]) {}
}

export type RestaurantMenuActionsUnion =
  | FetchRestaurantMenuItems
  | FetchedRestaurantMenuItems;
