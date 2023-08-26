import { EAction } from 'src/app/Restaurant/restaurant-shared/enum/action.enum';
import { EAdmin } from '../enum/admin-registration.enum';

export function AdminTableColumns(): Array<any> {
  return [
    {
      columnDef: EAdmin.ID,
      header: 'Id',
      cell: (element: any) => `${element[EAdmin.ID]}`,
    },
    {
      columnDef: EAdmin.NAME,
      header: 'Name',
      cell: (element: any) => `${element[EAdmin.NAME]}`,
    },
    {
      columnDef: EAdmin.USER_NAME,
      header: 'Username',
      cell: (element: any) => `${element[EAdmin.USER_NAME]}`,
    },
    {
      columnDef: EAdmin.PASSWORD,
      header: 'Password',
      cell: (element: any) => `${element[EAdmin.PASSWORD]}`,
    },
    {
      columnDef: EAdmin.TOKEN,
      header: 'Token',
      cell: (element: any) => `${element[EAdmin.TOKEN]}`,
    },
    {
      columnDef: EAdmin.STATUS,
      header: 'Status',
      cell: (element: any) => `${element[EAdmin.STATUS]}`,
    },
    {
      columnDef: EAdmin.CREATED_ON,
      header: 'Created on',
      cell: (element: any) => `${element[EAdmin.CREATED_ON]}`,
      type: 'date',
    },
    {
      columnDef: EAdmin.LAST_UPDATED_ON,
      header: 'Last updated on',
      cell: (element: any) => `$ ${element[EAdmin.LAST_UPDATED_ON]}`,
      type: 'date',
    },
    {
      columnDef: 'star',
      header: '',
      action: true,
      stickyEnd: true,
    },
  ];
}

export const adminActionList = [
  { id: EAction.View, name: 'View', heading: 'View', btn: 'View' },
  { id: EAction.Edit, name: 'Update', heading: 'Update', btn: 'Update' },
  { id: EAction.Delete, name: 'Delete', heading: 'Delete', btn: 'Delete' },
];
