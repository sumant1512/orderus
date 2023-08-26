export enum ERestaurantReceivedOrders {
  ORDER_ID = 'id',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  ADDRESS_1 = 'addressOne',
  ADDRESS_2 = 'addressTwo',
  CITY = 'city',
  STATE = 'state',
  COUNTRY = 'country',
  PIN_CODE = 'pinCode',
  ORDER_DATE_TIME = 'orderDateTime',
  ORDER_DATE = 'orderDate',
  ORDER_TIME = 'orderTime',
  STATUS = 'status',
  TOTAL_AMOUNT = 'totalAmount',
}

export enum ERestaurantDeliveryOrderStatus {
  VIEW = 'View',
  PENDING = 'Pending',
  OPEN = 'Open',
  ACCEPT = 'Accept',
  ACCEPTED = 'Accepted',
  PREPARING = 'Preparing',
  READY = 'Ready',
  PICKED_UP = 'Picked up',
  DELIVERED = 'Delivered',
}
