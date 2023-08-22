import { IDeliveryOrdersState } from './interfaces/delivery-orders.interface';
import {
  DeliveryOrdersActions,
  DeliveryOrdersActionsUnion,
} from './delivery-orders.actions';

export const initialDeliveryOrdersState: IDeliveryOrdersState = {
  activeOrdersList: [],
  openOrdersList: [],
  deliveredOrdersList: [],
};

export function DeliveryOrdersReducer(
  state = initialDeliveryOrdersState,
  action: DeliveryOrdersActionsUnion
) {
  switch (action.type) {
    case DeliveryOrdersActions.FETCHED_DELIVERED_ORDERS:
      return { ...state, deliveredOrdersList: action.payload };
    case DeliveryOrdersActions.FETCHED_OPEN_ORDERS:
      return { ...state, openOrdersList: action.payload };
    case DeliveryOrdersActions.FETCHED_ACTIVE_ORDERS:
      return { ...state, activeOrdersList: action.payload };
    default:
      return state;
  }
}
