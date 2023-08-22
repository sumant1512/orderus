import { IDeliveryOrdersState } from './delivery-orders/interfaces/delivery-orders.interface';

export type DeliveryAppState = Partial<{
  deliveryOrders: IDeliveryOrdersState;
}>;
