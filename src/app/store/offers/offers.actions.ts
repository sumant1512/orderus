import { Action } from '@ngrx/store';
import { IOffers } from './interfaces/offers.interface';

export enum OffersActions {
  FETCH_OFFERS = '[Offer] Fetch Offers',
  FETCHED_OFFERS = '[Offer] Fetched Offers',
}

export class FetchOffers implements Action {
  readonly type = OffersActions.FETCH_OFFERS;
}

export class FetchedOffers implements Action {
  readonly type = OffersActions.FETCHED_OFFERS;
  constructor(public payload: Array<IOffers>) {}
}

export type OffersActionsUnion = FetchOffers | FetchedOffers;
