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
    case DeliveryOrdersActions.FETCHED_DELIVERY_ORDERS:
      return { ...state, deliveredOrdersList: action.payload };
    default:
      return state;
  }
}
