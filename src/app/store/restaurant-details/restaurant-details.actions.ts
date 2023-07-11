import { Action } from '@ngrx/store';
import { IRestaurantDetailsState } from './interfaces/restaurant.interface';

export enum RestaurantDetailsActions {
  FETCH_RESTAURANT_DETAILS = '[RestaurantDetails] Fetch RestaurantDetails',
  FETCHED_RESTAURANT_DETAILS = '[RestaurantDetails] Fetched RestaurantDetails',
}

export class FetchRestaurantDetails implements Action {
  readonly type = RestaurantDetailsActions.FETCH_RESTAURANT_DETAILS;
  constructor(public payload: string) {}
}

export class FetchedRestaurantDetails implements Action {
  readonly type = RestaurantDetailsActions.FETCHED_RESTAURANT_DETAILS;
  constructor(public payload: IRestaurantDetailsState) {}
}

export type RestaurantDetailsActionsUnion =
  | FetchRestaurantDetails
  | FetchedRestaurantDetails;
