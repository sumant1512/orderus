import { Action } from '@ngrx/store';
import { IPromotion } from './interfaces/promotion.interface';

export enum PromotionActions {
  FETCH_PROMOTIONS = '[Promotion] Fetch Promotions',
  FETCHED_PROMOTIONS = '[Promotion] Fetched Promotions',
}

export class FetchPromotions implements Action {
  readonly type = PromotionActions.FETCH_PROMOTIONS;
}

export class FetchedPromotions implements Action {
  readonly type = PromotionActions.FETCHED_PROMOTIONS;
  constructor(public payload: IPromotion[]) {}
}

export type PromotionActionsUnion = FetchPromotions | FetchedPromotions;
