import { ECustomer } from './enum/customer.enum';

export function CustomerTableColumns(): Array<any> {
  return [
    {
      columnDef: ECustomer.ID,
      header: 'Id',
      cell: (element: any) => `${element[ECustomer.ID]}`,
    },
    {
      columnDef: ECustomer.FIRST_NAME,
      header: 'Name',
      cell: (element: any) =>
        `${element[ECustomer.FIRST_NAME]} ${element[ECustomer.LAST_NAME]}`,
    },
    {
      columnDef: ECustomer.PHONE,
      header: 'Phone',
      cell: (element: any) => `${element[ECustomer.PHONE]}`,
    },
    {
      columnDef: ECustomer.EMAIL,
      header: 'Email',
      cell: (element: any) => `${element[ECustomer.EMAIL]}`,
    },
    {
      columnDef: ECustomer.LAST_ORDER_DATE,
      header: 'Order date',
      cell: (element: any) => `${element[ECustomer.LAST_ORDER_DATE]}`,
    },
    {
      columnDef: ECustomer.TOTAL_ORDERS,
      header: 'Order time',
      cell: (element: any) => `${element[ECustomer.TOTAL_ORDERS]}`,
    },
    {
      columnDef: ECustomer.TOTAL_AMOUNT,
      header: 'Amount',
      cell: (element: any) => `${element[ECustomer.TOTAL_AMOUNT]}`,
    },
    {
      columnDef: 'star',
      header: '',
      action: true,
      stickyEnd: true,
    },
  ];
}
