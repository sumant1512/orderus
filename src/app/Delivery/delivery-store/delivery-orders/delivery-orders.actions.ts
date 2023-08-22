import { Action } from '@ngrx/store';
import { IDeliveryOrders } from './interfaces/delivery-orders.interface';

export enum DeliveryOrdersActions {
  FETCH_DELIVERED_ORDERS = '[DeliveredOrders] Fetch DeliveredOrders',
  FETCHED_DELIVERED_ORDERS = '[DeliveredOrders] Fetched DeliveredOrders',
  FETCH_OPEN_ORDERS = '[OpenOrders] Fetch OpenOrders',
  FETCHED_OPEN_ORDERS = '[OpenOrders] Fetched OpenOrders',
  FETCH_ACTIVE_ORDERS = '[ActiveOrders] Fetch ActiveOrders',
  FETCHED_ACTIVE_ORDERS = '[ActiveOrders] Fetched ActiveOrders',
}

export class FetchDeliveredOrders implements Action {
  readonly type = DeliveryOrdersActions.FETCH_DELIVERED_ORDERS;
}

export class FetchedDeliveredOrders implements Action {
  readonly type = DeliveryOrdersActions.FETCHED_DELIVERED_ORDERS;
  constructor(public payload: IDeliveryOrders[]) {}
}

export class FetchOpenOrders implements Action {
  readonly type = DeliveryOrdersActions.FETCH_OPEN_ORDERS;
}

export class FetchedOpenOrders implements Action {
  readonly type = DeliveryOrdersActions.FETCHED_OPEN_ORDERS;
  constructor(public payload: IDeliveryOrders[]) {}
}

export class FetchActiveOrders implements Action {
  readonly type = DeliveryOrdersActions.FETCH_ACTIVE_ORDERS;
}

export class FetchedActiveOrders implements Action {
  readonly type = DeliveryOrdersActions.FETCHED_ACTIVE_ORDERS;
  constructor(public payload: IDeliveryOrders[]) {}
}

export type DeliveryOrdersActionsUnion =
  | FetchDeliveredOrders
  | FetchedDeliveredOrders
  | FetchOpenOrders
  | FetchedOpenOrders
  | FetchActiveOrders
  | FetchedActiveOrders;
