import { IDeliveryOrders } from './interfaces/delivery-orders.interface';
import {
  DeliveryOrdersActions,
  DeliveryOrdersActionsUnion,
} from './delivery-orders.actions';

export const initialDeliveryOrdersState: Array<IDeliveryOrders> = [];

export function DeliveryOrdersReducer(
  state = initialDeliveryOrdersState,
  action: DeliveryOrdersActionsUnion
) {
  switch (action.type) {
    case DeliveryOrdersActions.FETCHED_DELIVERY_ORDERS:
      return action.payload;
    default:
      return state;
  }
}
