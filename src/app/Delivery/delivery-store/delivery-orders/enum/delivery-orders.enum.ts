export enum EDeliveryOrders {
  ORDER_ID = 'id',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  ADDRESS_1 = 'addressOne',
  ADDRESS_2 = 'addressTwo',
  CITY = 'city',
  STATE = 'state',
  COUNTRY = 'country',
  PIN_CODE = 'pinCode',
  ORDER_DATE = 'orderDate',
  STATUS = 'status',
  TOTAL_AMOUNT = 'totalAmount',
}

export enum EDeliveryOrderStatus {
  PENDING = 'Pending',
  ACCEPTED = 'Accepted',
  PREPARING = 'Preparing',
  READY = 'Ready',
  PICKED_UP = 'Picked up',
  DELIVERED = 'Delivered',
}
