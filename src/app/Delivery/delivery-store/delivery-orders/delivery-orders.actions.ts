import { Action } from '@ngrx/store';
import { IDeliveryOrders } from './interfaces/delivery-orders.interface';

export enum DeliveryOrdersActions {
  FETCH_DELIVERY_ORDERS = '[DeliveryOrders] Fetch DeliveryOrders',
  FETCHED_DELIVERY_ORDERS = '[DeliveryOrders] Fetched DeliveryOrders',
}

export class FetchDeliveryOrders implements Action {
  readonly type = DeliveryOrdersActions.FETCH_DELIVERY_ORDERS;
}

export class FetchedDeliveryOrders implements Action {
  readonly type = DeliveryOrdersActions.FETCHED_DELIVERY_ORDERS;
  constructor(public payload: IDeliveryOrders[]) {}
}

export type DeliveryOrdersActionsUnion =
  | FetchDeliveryOrders
  | FetchedDeliveryOrders;
