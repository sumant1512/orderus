import { Action } from '@ngrx/store';
import { IRestaurantReceivedOrders } from './interfaces/restaurant-received-orders.interface';

export enum RestaurantReceivedOrdersActions {
  FETCH_RESTAURANT_RECEIVED_ORDERS = '[RestaurantReceivedOrders] Fetch RestaurantReceivedOrderss',
  FETCHED_RESTAURANT_RECEIVED_ORDERS = '[RestaurantReceivedOrders] Fetched RestaurantReceivedOrderss',
}

export class FetchRestaurantReceivedOrders implements Action {
  readonly type =
    RestaurantReceivedOrdersActions.FETCH_RESTAURANT_RECEIVED_ORDERS;
}

export class FetchedRestaurantReceivedOrders implements Action {
  readonly type =
    RestaurantReceivedOrdersActions.FETCHED_RESTAURANT_RECEIVED_ORDERS;
  constructor(public payload: IRestaurantReceivedOrders[]) {}
}

export type RestaurantReceivedOrdersActionsUnion =
  | FetchRestaurantReceivedOrders
  | FetchedRestaurantReceivedOrders;
