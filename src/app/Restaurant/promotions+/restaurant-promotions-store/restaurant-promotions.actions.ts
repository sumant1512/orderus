import { Action } from '@ngrx/store';
import { IRestaurantPromotions } from './interfaces/restaurant-promotions.interface';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';

export enum RestaurantPromotionsActions {
  FETCH_RESTAURANT_PROMOTIONS = '[RestaurantPromotions] Fetch RestaurantPromotions',
  FETCHED_RESTAURANT_PROMOTIONS = '[RestaurantPromotions] Fetched RestaurantPromotions',
}

export class FetchRestaurantPromotions implements Action {
  readonly type = RestaurantPromotionsActions.FETCH_RESTAURANT_PROMOTIONS;
  constructor(public payload: ETabCode) {}
}

export class FetchedRestaurantPromotions implements Action {
  readonly type = RestaurantPromotionsActions.FETCHED_RESTAURANT_PROMOTIONS;
  constructor(public payload: IRestaurantPromotions[]) {}
}

export type RestaurantPromotionsActionsUnion =
  | FetchRestaurantPromotions
  | FetchedRestaurantPromotions;
