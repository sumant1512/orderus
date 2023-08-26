import {
  ERestaurantDeliveryOrderStatus,
  ERestaurantReceivedOrders,
} from './restaurant-received-orders.enum';

export function RestaurantReceivedOrdersTableColumns(): Array<any> {
  return [
    {
      columnDef: ERestaurantReceivedOrders.ORDER_ID,
      header: 'Id',
      cell: (element: any) => `${element[ERestaurantReceivedOrders.ORDER_ID]}`,
    },
    {
      columnDef: ERestaurantReceivedOrders.FIRST_NAME,
      header: 'Name',
      cell: (element: any) =>
        `${element[ERestaurantReceivedOrders.FIRST_NAME]} ${
          element[ERestaurantReceivedOrders.LAST_NAME]
        }`,
    },
    {
      columnDef: ERestaurantReceivedOrders.ADDRESS_1,
      header: 'Address',
      cell: (element: any) =>
        `${element[ERestaurantReceivedOrders.ADDRESS_1]} ${
          element[ERestaurantReceivedOrders.ADDRESS_2]
        }, ${element[ERestaurantReceivedOrders.PIN_CODE]}`,
    },
    {
      columnDef: ERestaurantReceivedOrders.ORDER_DATE,
      header: 'Order date',
      sortKey: ERestaurantReceivedOrders.ORDER_DATE_TIME,
      cell: (element: any) =>
        `${element[ERestaurantReceivedOrders.ORDER_DATE_TIME]}`,
      type: 'date',
    },
    {
      columnDef: ERestaurantReceivedOrders.ORDER_TIME,
      header: 'Order time',
      cell: (element: any) =>
        `${element[ERestaurantReceivedOrders.ORDER_DATE_TIME]}`,
      type: 'time',
    },
    {
      columnDef: ERestaurantReceivedOrders.STATUS,
      header: 'Status',
      cell: (element: any) => `${element[ERestaurantReceivedOrders.STATUS]}`,
    },
    {
      columnDef: ERestaurantReceivedOrders.TOTAL_AMOUNT,
      header: 'Amount',
      cell: (element: any) =>
        `$ ${element[ERestaurantReceivedOrders.TOTAL_AMOUNT]}`,
    },
    {
      columnDef: 'star',
      header: '',
      action: true,
      stickyEnd: true,
    },
  ];
}

export const restaurantReceivedActiveOrdersActionList = [
  { id: ERestaurantDeliveryOrderStatus.VIEW, name: 'View' },
  { id: ERestaurantDeliveryOrderStatus.PREPARING, name: 'Preparing' },
  { id: ERestaurantDeliveryOrderStatus.READY, name: 'Ready' },
  { id: ERestaurantDeliveryOrderStatus.PICKED_UP, name: 'Picked up' },
  { id: ERestaurantDeliveryOrderStatus.DELIVERED, name: 'Delivered' },
];

export const restaurantReceivedOpenOrdersActionList = [
  { id: ERestaurantDeliveryOrderStatus.VIEW, name: 'View' },
  { id: ERestaurantDeliveryOrderStatus.ACCEPT, name: 'Accept' },
];

export const restaurantReceivedDeliveredOrdersActionList = [
  { id: ERestaurantDeliveryOrderStatus.VIEW, name: 'View' },
  { id: ERestaurantDeliveryOrderStatus.ACCEPT, name: 'Accept' },
  { id: ERestaurantDeliveryOrderStatus.PREPARING, name: 'Preparing' },
  { id: ERestaurantDeliveryOrderStatus.READY, name: 'Ready' },
  { id: ERestaurantDeliveryOrderStatus.PICKED_UP, name: 'Picked up' },
  { id: ERestaurantDeliveryOrderStatus.DELIVERED, name: 'Delivered' },
];
