import { Action } from '@ngrx/store';
import { IRestaurant } from './interfaces/restaurant.interface';

export enum RestaurantActions {
  FETCH_RESTAURANTS = '[Restaurant] Fetch Restaurants',
  FETCHED_RESTAURANTS = '[Restaurant] Fetched Restaurants',
}

export class FetchRestaurants implements Action {
  readonly type = RestaurantActions.FETCH_RESTAURANTS;
}

export class FetchedRestaurants implements Action {
  readonly type = RestaurantActions.FETCHED_RESTAURANTS;
  constructor(public payload: IRestaurant[]) {}
}

export type RestaurantActionsUnion = FetchRestaurants | FetchedRestaurants;
