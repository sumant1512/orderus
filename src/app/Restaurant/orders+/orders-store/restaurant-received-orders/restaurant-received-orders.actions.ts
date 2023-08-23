import { Action } from '@ngrx/store';
import { IRestaurantReceivedOrders } from './interfaces/restaurant-received-orders.interface';

export enum RestaurantReceivedOrdersActions {
  FETCH_RESTAURANT_RECEIVED_DELIVERED_ORDERS = '[RestaurantReceivedDeliveredOrders] Fetch RestaurantReceivedDeliveredOrders',
  FETCHED_RESTAURANT_RECEIVED_DELIVERED_ORDERS = '[RestaurantReceivedDeliveredOrders] Fetched RestaurantReceivedDeliveredOrders',
  FETCH_RESTAURANT_RECEIVED_OPEN_ORDERS = '[RestaurantReceivedOpenOrders] Fetch RestaurantReceivedOpenOrders',
  FETCHED_RESTAURANT_RECEIVED_OPEN_ORDERS = '[RestaurantReceivedOpenOrders] Fetched RestaurantReceivedOpenOrders',
  FETCH_RESTAURANT_RECEIVED_ACTIVE_ORDERS = '[RestaurantReceivedActiveOrders] Fetch RestaurantReceivedActiveOrders',
  FETCHED_RESTAURANT_RECEIVED_ACTIVE_ORDERS = '[RestaurantReceivedActiveOrders] Fetched RestaurantReceivedActiveOrders',
}

export class FetchRestaurantReceivedDeliveredOrders implements Action {
  readonly type =
    RestaurantReceivedOrdersActions.FETCH_RESTAURANT_RECEIVED_DELIVERED_ORDERS;
}

export class FetchedRestaurantReceivedDeliveredOrders implements Action {
  readonly type =
    RestaurantReceivedOrdersActions.FETCHED_RESTAURANT_RECEIVED_DELIVERED_ORDERS;
  constructor(public payload: IRestaurantReceivedOrders[]) {}
}

export class FetchRestaurantReceivedOpenOrders implements Action {
  readonly type =
    RestaurantReceivedOrdersActions.FETCH_RESTAURANT_RECEIVED_OPEN_ORDERS;
}

export class FetchedRestaurantReceivedOpenOrders implements Action {
  readonly type =
    RestaurantReceivedOrdersActions.FETCHED_RESTAURANT_RECEIVED_OPEN_ORDERS;
  constructor(public payload: IRestaurantReceivedOrders[]) {}
}

export class FetchRestaurantReceivedActiveOrders implements Action {
  readonly type =
    RestaurantReceivedOrdersActions.FETCH_RESTAURANT_RECEIVED_ACTIVE_ORDERS;
}

export class FetchedRestaurantReceivedActiveOrders implements Action {
  readonly type =
    RestaurantReceivedOrdersActions.FETCHED_RESTAURANT_RECEIVED_ACTIVE_ORDERS;
  constructor(public payload: IRestaurantReceivedOrders[]) {}
}

export type RestaurantReceivedOrdersActionsUnion =
  | FetchRestaurantReceivedDeliveredOrders
  | FetchedRestaurantReceivedDeliveredOrders
  | FetchRestaurantReceivedOpenOrders
  | FetchedRestaurantReceivedOpenOrders
  | FetchRestaurantReceivedActiveOrders
  | FetchedRestaurantReceivedActiveOrders;
