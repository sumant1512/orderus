import { IDeliveryOrders } from './delivery-orders/interfaces/delivery-orders.interface';

export type DeliveryAppState = Partial<{
  deliveryOrdersList: Array<IDeliveryOrders>;
}>;
