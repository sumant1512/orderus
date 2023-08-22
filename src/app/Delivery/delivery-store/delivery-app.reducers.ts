import { ActionReducerMap } from '@ngrx/store';
import { DeliveryAppState } from './delivery-app.state';
import { DeliveryOrdersReducer } from './delivery-orders/delivery-orders.reducers';

export const deliveryAppReducers: ActionReducerMap<DeliveryAppState, any> = {
  deliveryOrders: DeliveryOrdersReducer,
};
