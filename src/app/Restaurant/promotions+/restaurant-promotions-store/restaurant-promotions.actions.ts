import { Action } from '@ngrx/store';
import { IRestaurantPromotions } from './interfaces/restaurant-promotions.interface';

export enum RestaurantPromotionsActions {
  FETCH_RESTAURANT_ACTIVE_PROMOTIONS = '[RestaurantPromotions] Fetch RestaurantActivePromotions',
  FETCHED_RESTAURANT_ACTIVE_PROMOTIONS = '[RestaurantPromotions] Fetched RestaurantActivePromotions',
  FETCH_RESTAURANT_SCHEDULED_PROMOTIONS = '[RestaurantPromotions] Fetch RestaurantScheduledPromotions',
  FETCHED_RESTAURANT_SCHEDULED_PROMOTIONS = '[RestaurantPromotions] Fetched RestaurantScheduledPromotions',
  FETCH_RESTAURANT_EXPIRED_PROMOTIONS = '[RestaurantPromotions] Fetch RestaurantExpiredPromotions',
  FETCHED_RESTAURANT_EXPIRED_PROMOTIONS = '[RestaurantPromotions] Fetched RestaurantExpiredPromotions',
}

export class FetchRestaurantActivePromotions implements Action {
  readonly type =
    RestaurantPromotionsActions.FETCH_RESTAURANT_ACTIVE_PROMOTIONS;
}

export class FetchedRestaurantActivePromotions implements Action {
  readonly type =
    RestaurantPromotionsActions.FETCHED_RESTAURANT_ACTIVE_PROMOTIONS;
  constructor(public payload: IRestaurantPromotions[]) {}
}
export class FetchRestaurantScheduledPromotions implements Action {
  readonly type =
    RestaurantPromotionsActions.FETCH_RESTAURANT_SCHEDULED_PROMOTIONS;
}

export class FetchedRestaurantScheduledPromotions implements Action {
  readonly type =
    RestaurantPromotionsActions.FETCHED_RESTAURANT_SCHEDULED_PROMOTIONS;
  constructor(public payload: IRestaurantPromotions[]) {}
}

export class FetchRestaurantExpiredPromotions implements Action {
  readonly type =
    RestaurantPromotionsActions.FETCH_RESTAURANT_EXPIRED_PROMOTIONS;
}

export class FetchedRestaurantExpiredPromotions implements Action {
  readonly type =
    RestaurantPromotionsActions.FETCHED_RESTAURANT_EXPIRED_PROMOTIONS;
  constructor(public payload: IRestaurantPromotions[]) {}
}

export type RestaurantPromotionsActionsUnion =
  | FetchRestaurantActivePromotions
  | FetchedRestaurantActivePromotions
  | FetchRestaurantScheduledPromotions
  | FetchedRestaurantScheduledPromotions
  | FetchRestaurantExpiredPromotions
  | FetchedRestaurantExpiredPromotions;
