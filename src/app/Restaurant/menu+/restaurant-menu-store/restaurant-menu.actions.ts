import { Action } from '@ngrx/store';
import {
  IRestaurantMenuCategories,
  IRestaurantMenuItem,
} from './interfaces/restaurant-menu.interface';

export enum RestaurantMenuActions {
  FETCH_RESTAURANT_MENU_ITEMS = '[RestaurantMenu] Fetch Restaurant Menu Items',
  FETCHED_RESTAURANT_MENU_ITEMS = '[RestaurantMenu] Fetched Restaurant Menu Items',
  FETCH_RESTAURANT_MENU_CATEGORIES = '[RestaurantMenu] Fetch Restaurant Menu Categories',
  FETCHED_RESTAURANT_MENU_CATEGORIES = '[RestaurantMenu] Fetched Restaurant Menu Categories',
}

export class FetchRestaurantMenuItems implements Action {
  readonly type = RestaurantMenuActions.FETCH_RESTAURANT_MENU_ITEMS;
}

export class FetchedRestaurantMenuItems implements Action {
  readonly type = RestaurantMenuActions.FETCHED_RESTAURANT_MENU_ITEMS;
  constructor(public payload: IRestaurantMenuItem[]) {}
}

export class FetchRestaurantMenuCategories implements Action {
  readonly type = RestaurantMenuActions.FETCH_RESTAURANT_MENU_CATEGORIES;
}

export class FetchedRestaurantMenuCategories implements Action {
  readonly type = RestaurantMenuActions.FETCHED_RESTAURANT_MENU_CATEGORIES;
  constructor(public payload: IRestaurantMenuCategories[]) {}
}

export type RestaurantMenuActionsUnion =
  | FetchRestaurantMenuItems
  | FetchedRestaurantMenuItems
  | FetchRestaurantMenuCategories
  | FetchedRestaurantMenuCategories;
